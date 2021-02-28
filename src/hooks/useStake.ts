import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, psiStake, psiStakeBnb } from 'utils/callHelpers'
import { useMasterchef, usePsiChef } from './useContract'

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

export const usePsiStake = (psiId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const psiChefContract = usePsiChef(psiId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (psiId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await psiStakeBnb(psiChefContract, amount, account)
      } else {
        await psiStake(psiChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(psiId, account))
      dispatch(updateUserBalance(psiId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, psiChefContract, psiId],
  )

  return { onStake: handleStake }
}

export default useStake
