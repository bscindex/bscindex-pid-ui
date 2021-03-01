import { MenuEntry } from '@bscindexpid/uikit'

const config: MenuEntry[] = [
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
          'https://cheeseswap.app/#/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0xc8c7ece03492cc1d99b1cc2bb588254b15de45a5',
      },
      {
        label: 'Liquidity',
        href:
          'https://cheeseswap.app/#/add/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c/0xc8c7ece03492cc1d99b1cc2bb588254b15de45a5',
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
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cheeseswap.app',
      },
      {
        label: 'Tokens',
        href: 'https://info.cheeseswap.app/token/0xc8c7ece03492cc1d99b1cc2bb588254b15de45a5',
      },
      {
        label: 'Pairs',
        href: 'https://info.cheeseswap.app/pair/0x96bae269454f7d9c0a5e032290aba3f36355579b',
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
