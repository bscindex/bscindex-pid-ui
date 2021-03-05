import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, pksiUnstake, pksiEmegencyUnstake } from 'utils/callHelpers'
import { useMasterchef, usePksiChef } from './useContract'

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

const PKSIIDS = [1, 2, 3, 4]

export const usePksiUnstake = (pksiId) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const pksiChefContract = usePksiChef(pksiId)
  const isOldPksi = PKSIIDS.includes(pksiId)

  const handleUnstake = useCallback(
    async (amount: string) => {
      if (pksiId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldPksi) {
        const txHash = await pksiEmegencyUnstake(pksiChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await pksiUnstake(pksiChefContract, amount, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(pksiId, account))
      dispatch(updateUserBalance(pksiId, account))
      dispatch(updateUserPendingReward(pksiId, account))
    },
    [account, dispatch, isOldPksi, masterChefContract, pksiChefContract, pksiId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
