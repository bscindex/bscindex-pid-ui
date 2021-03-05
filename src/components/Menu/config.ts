import { MenuEntry } from '@bscindexpid/uikit'

const config: MenuEntry[] = [
  {
    label: 'BSCIndex',
    icon: 'BSCIndexIcon',
    href: 'https://bscindex.com',
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://cheeseswap.app/#/swap?inputCurrency=0x0db5591ea716d2495860e1daa47114ca416f6055&outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
      {
        label: 'Liquidity',
        href:
          'https://cheeseswap.app/#/add/0x0db5591ea716d2495860e1daa47114ca416f6055/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: 'https://bscindex.com/#exchange',
  },
  {
    label: 'Keeper',
    icon: 'KeeperIcon',
    href: 'https://keep3rb.network',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cheeseswap.app',
      },
      {
        label: 'Tokens',
        href: 'https://info.cheeseswap.app/token/0x0db5591ea716d2495860e1daa47114ca416f6055',
      },
      {
        label: 'Pairs',
        href: 'https://info.cheeseswap.app/pair/0x93289e37637055b4023eb3e5cfe4b03f9d8f4785',
      },
      {
        label: 'Accounts',
        href: 'https://info.cheeseswap.app/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bscindex',
      },
    ],
  },
]

export default config
