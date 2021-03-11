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
  {
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
  {
    pid: 6,
    lpSymbol: 'CHS SOLO',
    lpAddresses: {
      97: '',
      56: '0xaDD8A06fd58761A5047426e160B2B88AD3B9D464',
    },
    tokenSymbol: 'CHS',
    tokenAddresses: {
      97: '',
      56: '0xaDD8A06fd58761A5047426e160B2B88AD3B9D464',
    },
    quoteTokenSymbol: QuoteToken.CHS,
    quoteTokenAdresses: contracts.chs,
  },
  {
    pid: 7,
    lpSymbol: 'PIZZA SOLO',
    lpAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    tokenSymbol: 'PIZZA',
    tokenAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    quoteTokenSymbol: QuoteToken.PIZZA,
    quoteTokenAdresses: contracts.pizza,
  },
  {
    pid: 8,
    lpSymbol: 'KP3RB SOLO',
    lpAddresses: {
      97: '',
      56: '0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81',
    },
    tokenSymbol: 'KP3RB',
    tokenAddresses: {
      97: '',
      56: '0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81',
    },
    quoteTokenSymbol: QuoteToken.KP3RB,
    quoteTokenAdresses: contracts.kp3rb,
  },
  {
    pid: 9,
    lpSymbol: 'KIWI SOLO',
    lpAddresses: {
      97: '',
      56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
    },
    tokenSymbol: 'KIWI',
    tokenAddresses: {
      97: '',
      56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
    },
    quoteTokenSymbol: QuoteToken.KIWI,
    quoteTokenAdresses: contracts.kiwi,
  },
  {
    pid: 10,
    lpSymbol: 'BUTT SOLO',
    lpAddresses: {
      97: '',
      56: '0x0bc907e26377f7e072d27d7c57e72e13fc343abc',
    },
    tokenSymbol: 'BUTT',
    tokenAddresses: {
      97: '',
      56: '0x0bc907e26377f7e072d27d7c57e72e13fc343abc',
    },
    quoteTokenSymbol: QuoteToken.BUTT,
    quoteTokenAdresses: contracts.butt,
  },
  {
    pid: 11,
    lpSymbol: 'CID SOLO',
    lpAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    tokenSymbol: 'CID',
    tokenAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    quoteTokenSymbol: QuoteToken.CID,
    quoteTokenAdresses: contracts.cid,
  },

]

export default farms
