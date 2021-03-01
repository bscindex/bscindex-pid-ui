import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PKID',
    lpAddresses: {
      97: '',
      56: '0x0Db5591EA716d2495860E1dAa47114ca416F6055',
    },
    tokenSymbol: 'PKSI',
    tokenAddresses: {
      97: '',
      56: '0xE8dC20d6C96d1942C266ec674fe330B0Ec261c9f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PKID-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x93289E37637055b4023Eb3e5CfE4b03f9D8F4785',
    },
    tokenSymbol: 'PKID',
    tokenAddresses: {
      97: '',
      56: '0x0Db5591EA716d2495860E1dAa47114ca416F6055',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
   pid: 4,
    lpSymbol: 'CTK-CHS LP',
    lpAddresses: {
      97: '',
      56: '0xa5A1e8855A0D4f6C7Df6F1574CEa79ba9Ca47ff7',
    },
    tokenSymbol: 'CTK',
    tokenAddresses: {
      97: '',
      56: '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
    },
    quoteTokenSymbol: QuoteToken.CHS,
    quoteTokenAdresses: contracts.chs,
  },
   {
    pid: 5,
    lpSymbol: 'CTK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaeA443b0B54E255DAfeCD6766C7d36D8DF8F529E',
    },
    tokenSymbol: 'CTK',
    tokenAddresses: {
      97: '',
      56: '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF455f6f7988B752F75488E2CCcC030346d0Cac72',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
