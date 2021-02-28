import { usePricePidBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalPid = getBalanceNumber(totalRewards)
  const pidPriceBusd = usePricePidBusd()

  return totalPid * pidPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
