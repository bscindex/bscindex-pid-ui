import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { csihHarvest, csihHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, useCsiChef } from './useContract'

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

export const useCsiHarvest = (csiId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const csiChefContract = useCsiChef(csiId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (csiId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (isUsingBnb) {
      await csihHarvestBnb(csiChefContract, account)
    } else {
      await csihHarvest(csiChefContract, account)
    }
    dispatch(updateUserPendingReward(csiId, account))
    dispatch(updateUserBalance(csiId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, csiChefContract, csiId])

  return { onReward: handleHarvest }
}
