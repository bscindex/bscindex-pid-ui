import { usePriceCidBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCid = getBalanceNumber(totalRewards)
  const cidPriceBusd = usePriceCidBusd()

  return totalCid * cidPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
