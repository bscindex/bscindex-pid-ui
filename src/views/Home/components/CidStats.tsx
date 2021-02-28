import React from 'react'
import { Card, CardBody, Heading, Text } from '@bscindex/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCidAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCidStats = styled(Card)`
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

const CidStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCidAddress())
  const cidSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledCidStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Cid Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total CID Supply')}</Text>
          {cidSupply && <CardValue fontSize="14px" value={cidSupply} />}
        </Row>
          <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total CID Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New CID/block')}</Text>
          <CardValue fontSize="14px" decimals={4} value={0.020} />
        </Row>
      </CardBody>
    </StyledCidStats>
  )
}

export default CidStats
