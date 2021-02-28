import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import { updateUserAllowance, fetchFarmUserDataAsync } from 'state/actions'
import { approve } from 'utils/callHelpers'
import { useMasterchef, usePid, usePsiChef, useLottery } from './useContract'

// Approve a Farm
export const useApprove = (lpContract: Contract) => {
  const dispatch = useDispatch()
  const { account }: { account: string } = useWallet()
  const masterChefContract = useMasterchef()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      dispatch(fetchFarmUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

// Approve a Pool
export const usePsiApprove = (lpContract: Contract, psiId) => {
  const dispatch = useDispatch()
  const { account }: { account: string } = useWallet()
  const psiChefContract = usePsiChef(psiId)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, psiChefContract, account)
      dispatch(updateUserAllowance(psiId, account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, psiChefContract, psiId])

  return { onApprove: handleApprove }
}

// Approve the lottery
export const useLotteryApprove = () => {
  const { account }: { account: string } = useWallet()
  const pidContract = usePid()
  const lotteryContract = useLottery()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(pidContract, lotteryContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, pidContract, lotteryContract])

  return { onApprove: handleApprove }
}

// Approve an IFO
export const useIfoApprove = (tokenContract: Contract, spenderAddress: string) => {
  const { account } = useWallet()
  const onApprove = useCallback(async () => {
    try {
      const tx = await tokenContract.methods
        .approve(spenderAddress, ethers.constants.MaxUint256)
        .send({ from: account })
      return tx
    } catch {
      return false
    }
  }, [account, spenderAddress, tokenContract])

  return onApprove
}
