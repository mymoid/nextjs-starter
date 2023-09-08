'use client'
import { ThemeProvider, getInitColorSchemeScript } from '@mymoid/ui-components'
import NextAppDirEmotionCacheProvider from './EmotionCache'

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      {getInitColorSchemeScript()}
      <ThemeProvider>{children}</ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
