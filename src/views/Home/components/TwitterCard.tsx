import React from 'react'
import { Card, CardBody, Heading } from '@bscindexpid/uikit'
import { Timeline } from 'react-twitter-widgets'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="md" mb="24px">
          {TranslateString(10003, 'Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'cheeseswapbsc',
          }}
          options={{
            height: '220',
            chrome: 'noheader, nofooter',
            width: '280',
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
