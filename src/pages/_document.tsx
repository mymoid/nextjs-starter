import { Html, Head, Main, NextScript } from 'next/document'
import { getInitColorSchemeScript } from '@mymoid/ui-components'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {getInitColorSchemeScript()}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
