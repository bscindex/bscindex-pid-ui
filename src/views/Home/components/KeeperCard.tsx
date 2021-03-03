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
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`

const KeeperCard = () => {
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          Keeper BSC
        </Heading>
        <CardMidContent color="#ECB323">Join Keeper and Work</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            Earn KP3RB, BNB
          </Heading>
          <StyledLink href="https://keep3rb.network" id="farm-apy-cta">
            <ArrowForwardIcon mt={30} color="primary" />
          </StyledLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default KeeperCard
