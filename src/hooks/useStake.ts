import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, pksiStake, pksiStakeBnb } from 'utils/callHelpers'
import { useMasterchef, usePksiChef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export const usePksiStake = (pksiId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const pksiChefContract = usePksiChef(pksiId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (pksiId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await pksiStakeBnb(pksiChefContract, amount, account)
      } else {
        await pksiStake(pksiChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(pksiId, account))
      dispatch(updateUserBalance(pksiId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, pksiChefContract, pksiId],
  )

  return { onStake: handleStake }
}

export default useStake
