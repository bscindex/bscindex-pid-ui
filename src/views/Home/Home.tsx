import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@bscindexpid/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import PkidStats from './components/PkidStats'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import BSCIndexCard from './components/BSCIndexCard'
import KeeperCard from './components/KeeperCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/home-bg.svg'), url('/images/home-bg2.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'PancakeSwap Index')}
        </Heading>
        <Text>{TranslateString(578, 'The First Index Grower Yield Farm and Exchange on Binance Smart Chain.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <LotteryCard />
        </Cards>
        <CTACards>
          <TwitterCard />
          <BSCIndexCard />
          <KeeperCard />
        </CTACards>
        <Cards>
          <PkidStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
