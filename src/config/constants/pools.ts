import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pksiId: 0,
    tokenName: 'PKID',
    earnToken: 'PKID',
    stakingTokenName: QuoteToken.PKID,
    stakingTokenAddress: '0x0Db5591EA716d2495860E1dAa47114ca416F6055',
    contractAddress: {
      97: '',
      56: '0x547D63927cFE91B24eC89D5D175430C6858BCE31',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pid.bscindex.com',
    harvest: true,
    tokenPerBlock: '0.051',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    pksiId: 1,
    tokenName: 'PKID',
    earnToken: 'CHS',
    stakingTokenName: QuoteToken.PKID,
    stakingTokenAddress: '0x0Db5591EA716d2495860E1dAa47114ca416F6055',
    contractAddress: {
      97: '',
      56: '0x2C4f7fA878bfabC4A3b5A28C1b5Dc104f6ef3c1F',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://cheeseswap.app',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
