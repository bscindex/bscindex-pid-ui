import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { psihHarvest, psihHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, usePsiChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChefContract])

  return { onReward: handleHarvest }
}

export const usePsiHarvest = (psiId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const psiChefContract = usePsiChef(psiId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (psiId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (isUsingBnb) {
      await psihHarvestBnb(psiChefContract, account)
    } else {
      await psihHarvest(psiChefContract, account)
    }
    dispatch(updateUserPendingReward(psiId, account))
    dispatch(updateUserBalance(psiId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, psiChefContract, psiId])

  return { onReward: handleHarvest }
}
