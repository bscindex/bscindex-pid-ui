import React from 'react'
import { Card, CardBody, Heading, Text } from '@bscindex/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getPidAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledPidStats = styled(Card)`
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

const PidStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getPidAddress())
  const pidSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledPidStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'PID Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total PID Supply')}</Text>
          {pidSupply && <CardValue fontSize="14px" value={pidSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total PID Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New PID/block')}</Text>
          <CardValue fontSize="14px" decimals={4} value={0.02} />
        </Row>
      </CardBody>
    </StyledPidStats>
  )
}

export default PidStats
