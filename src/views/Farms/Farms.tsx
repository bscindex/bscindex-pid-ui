import React, { useEffect, useCallback } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@bscindex/uikit'
import { BLOCKS_PER_YEAR, PID_PER_BLOCK, PID_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePricePidBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const pidPrice = usePricePidBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const pidPriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === PID_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const pidRewardPerBlock = PID_PER_BLOCK.times(farm.poolWeight)
        const pidRewardPerYear = pidRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = pidPriceVsBNB.times(pidRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.USDT || farm.quoteTokenSymbol === QuoteToken.USDC) {
          apy = pidPriceVsBNB.times(pidRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice)
        } else if (farm.quoteTokenSymbol === QuoteToken.PID) {
          apy = pidRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const pidApy =
            farm && pidPriceVsBNB.times(pidRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
          const dualApy =
            farm.tokenPriceVsQuote &&
            new BigNumber(farm.tokenPriceVsQuote)
              .times(farm.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(farm.lpTotalInQuoteToken)

          apy = pidApy && dualApy && pidApy.plus(dualApy)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          pidPrice={pidPrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, farmsLP, account, pidPrice, ethereum],
  )

  return (
    <Page>
      <Heading as="h1" size="lg" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(999, 'Stake Cheese-LP tokens to earn PID')}
      </Heading>
      <Heading as="h3" size="lg" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(
          999,
          'CAUTION!: FARMS CALCULATED "APY" DATA IS REAL TIME AND AUTOMATICALLY COLLECTED FROM BLOCKCHAIN. DATA MAY NOT BE ACCURATE.',
        )}
      </Heading>
      <FarmTabButtons />
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      <Image src="/images/farm-bg.svg" alt="PidFinance illustration" width={1080} height={600} responsive />
    </Page>
  )
}

export default Farms
