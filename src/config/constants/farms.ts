import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PID',
    lpAddresses: {
      97: '',
      56: '0xC8C7EcE03492cC1D99b1Cc2BB588254b15dE45A5',
    },
    tokenSymbol: 'PSI',
    tokenAddresses: {
      97: '',
      56: '0x24835Eb32cE4B91916013A5399c5565F26a92546',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PID-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x96bae269454f7d9c0A5E032290abA3f36355579b',
    },
    tokenSymbol: 'PID',
    tokenAddresses: {
      97: '',
      56: '0xC8C7EcE03492cC1D99b1Cc2BB588254b15dE45A5',
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
