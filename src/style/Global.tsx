import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { BSCIndexTheme } from '@bscindex/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends BSCIndexTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Nunito Sans', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
