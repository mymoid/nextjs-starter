import { Global, css } from '@emotion/react'
import { SWRConfig } from 'swr'
import { ThemeProvider } from '@mymoid/ui-components'
import { UserDTO } from '@/domain'
import { userFromDto } from '@/mappers/user.mapper'
import Layout from '@/components/Common/Layout'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

const styles = css`
  body {
    background-color: var(--palette-background-default);
    [data-mui-color-scheme='dark'] & {
      background-color: var(--palette-background-paper);
    }
  }
`

export default function App({ Component, pageProps }: AppProps) {
  const { user }: { user: UserDTO } = pageProps
  const inputGlobalStyles = <Global styles={styles} />
  const preFetchedData = {
    user: user && userFromDto(user)
  }
  return (
    <ThemeProvider>
      {inputGlobalStyles}
      <SWRConfig value={{ fallback: preFetchedData }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  )
}
