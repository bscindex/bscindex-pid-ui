import React, { useEffect, useCallback } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@bscindexpid/uikit'
import { BLOCKS_PER_YEAR, PKID_PER_BLOCK, PKID_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePricePkidBusd } from 'state/hooks'
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
  const pkidPrice = usePricePkidBusd()
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
      const pkidPriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === PKID_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const pkidRewardPerBlock = PKID_PER_BLOCK.times(farm.poolWeight)
        const pkidRewardPerYear = pkidRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = pkidPriceVsBNB.times(pkidRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.USDT || farm.quoteTokenSymbol === QuoteToken.USDC) {
          apy = pkidPriceVsBNB.times(pkidRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice)
        } else if (farm.quoteTokenSymbol === QuoteToken.PKID) {
          apy = pkidRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const pkidApy =
            farm && pkidPriceVsBNB.times(pkidRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
          const dualApy =
            farm.tokenPriceVsQuote &&
            new BigNumber(farm.tokenPriceVsQuote)
              .times(farm.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(farm.lpTotalInQuoteToken)

          apy = pkidApy && dualApy && pkidApy.plus(dualApy)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          pkidPrice={pkidPrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, farmsLP, account, pkidPrice, ethereum],
  )

  return (
    <Page>
      <Heading as="h1" size="lg" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(999, 'Stake Cheese-LP tokens to earn PKID')}
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
      <Image src="/images/farm-bg.png" alt="PKID illustration" width={1080} height={600} responsive />
    </Page>
  )
}

export default Farms
