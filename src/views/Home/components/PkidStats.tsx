import React from 'react'
import { Card, CardBody, Heading, Text } from '@bscindexpid/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getPkidAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledPkidStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const PkidStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getPkidAddress())
  const pkidSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledPkidStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'PKID Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total PKID Supply')}</Text>
          {pkidSupply && <CardValue fontSize="14px" value={pkidSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total PKID Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New PKID/block')}</Text>
          <CardValue fontSize="14px" decimals={4} value={0.5} />
        </Row>
      </CardBody>
    </StyledPkidStats>
  )
}

export default PkidStats
