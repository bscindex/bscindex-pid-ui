import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    psiId: 0,
    tokenName: 'PID',
    earnToken: 'PID',
    stakingTokenName: QuoteToken.PID,
    stakingTokenAddress: '0xC8C7EcE03492cC1D99b1Cc2BB588254b15dE45A5',
    contractAddress: {
      97: '',
      56: '0x81011BC892acFE5228517AE0E163e838326FA14E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://bscindex.com/',
    harvest: false,
    tokenPerBlock: '0.10',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
  }
]

export default pools
