import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, psiUnstake, psiEmegencyUnstake } from 'utils/callHelpers'
import { useMasterchef, usePsiChef } from './useContract'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

const PSIIDS = [1]

export const usePsiUnstake = (psiId) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const psiChefContract = usePsiChef(psiId)
  const isOldPsi = PSIIDS.includes(psiId)

  const handleUnstake = useCallback(
    async (amount: string) => {
      if (psiId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldPsi) {
        const txHash = await psiEmegencyUnstake(psiChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await psiUnstake(psiChefContract, amount, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(psiId, account))
      dispatch(updateUserBalance(psiId, account))
      dispatch(updateUserPendingReward(psiId, account))
    },
    [account, dispatch, isOldPsi, masterChefContract, psiChefContract, psiId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
