import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, csiStake, csiStakeBnb } from 'utils/callHelpers'
import { useMasterchef, useCsiChef } from './useContract'

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

export const useCsiStake = (csiId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const csiChefContract = useCsiChef(csiId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (csiId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await csiStakeBnb(csiChefContract, amount, account)
      } else {
        await csiStake(csiChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(csiId, account))
      dispatch(updateUserBalance(csiId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, csiChefContract, csiId],
  )

  return { onStake: handleStake }
}

export default useStake
