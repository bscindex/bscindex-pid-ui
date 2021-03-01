import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { pksihHarvest, pksihHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, usePksiChef } from './useContract'

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

export const usePksiHarvest = (pksiId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const pksiChefContract = usePksiChef(pksiId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (pksiId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (isUsingBnb) {
      await pksihHarvestBnb(pksiChefContract, account)
    } else {
      await pksihHarvest(pksiChefContract, account)
    }
    dispatch(updateUserPendingReward(pksiId, account))
    dispatch(updateUserBalance(pksiId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, pksiChefContract, pksiId])

  return { onReward: handleHarvest }
}
