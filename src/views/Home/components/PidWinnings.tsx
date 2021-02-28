import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const PidWinnings = () => {
  const { claimAmount } = useTotalClaim()
  return <CardValue value={getBalanceNumber(claimAmount)} />
}

export default PidWinnings
