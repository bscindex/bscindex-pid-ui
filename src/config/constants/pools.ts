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
    tokenPerBlock: '0.031',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    pksiId: 1,
    tokenName: 'CHS',
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
    tokenPerBlock: '0.05',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    pksiId: 2,
    tokenName: 'KP3RB',
    earnToken: 'KP3RB',
    stakingTokenName: QuoteToken.PKID,
    stakingTokenAddress: '0x0Db5591EA716d2495860E1dAa47114ca416F6055',
    contractAddress: {
      97: '',
      56: '0x88f58e25E7D56131d259d9242f45Bb4579d2801E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://keep3rb.network',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 3,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
