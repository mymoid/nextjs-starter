import '@/styles/globals.css'
import { ThemeProvider } from '@mymoid/ui-components'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
