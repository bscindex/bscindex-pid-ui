import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Link } from '@bscindexpid/uikit'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'lg' })`
  line-height: 30px;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`
const BSCIndexCard = () => {
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          BSC Index exchange
        </Heading>
        <CardMidContent color="#ECB323">Features: Spot Trade, Orderbook, Stop Loss Trade, Margin</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            Developing
          </Heading>
          <StyledLink href="https://bscindex.com/" id="farm-apy-cta">
            <ArrowForwardIcon mt={30} color="primary" />
          </StyledLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default BSCIndexCard
