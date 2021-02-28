import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, csiUnstake, csiEmegencyUnstake } from 'utils/callHelpers'
import { useMasterchef, useCsiChef } from './useContract'

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

const CSIIDS = [1]

export const useCsiUnstake = (csiId) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const csiChefContract = useCsiChef(csiId)
  const isOldCsi = CSIIDS.includes(csiId)

  const handleUnstake = useCallback(
    async (amount: string) => {
      if (csiId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldCsi) {
        const txHash = await csiEmegencyUnstake(csiChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await csiUnstake(csiChefContract, amount, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(csiId, account))
      dispatch(updateUserBalance(csiId, account))
      dispatch(updateUserPendingReward(csiId, account))
    },
    [account, dispatch, isOldCsi, masterChefContract, csiChefContract, csiId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
