import '@/styles/globals.css'
import { ThemeProvider } from '@mymoid/ui-components'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  )
}
