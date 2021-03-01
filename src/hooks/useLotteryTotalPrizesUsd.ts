import { usePricePkidBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalPkid = getBalanceNumber(totalRewards)
  const pkidPriceBusd = usePricePkidBusd()

  return totalPkid * pkidPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
