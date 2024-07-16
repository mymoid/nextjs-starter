import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import { ThemeRegistry } from '@/components/themeRegistry/ThemeRegistry'
import { META_CONFIGS } from '@/components/seo/metas'
import type { Metadata } from 'next'

const FloatingComponents = dynamic(() =>
  import('@/components/common/FloatingComponents').then(
    (res) => res.FloatingComponents
  )
)

export function generateMetadata(): Metadata {
  return {
    ...META_CONFIGS.default
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            <Suspense>
              <FloatingComponents />
              <main>{children}</main>
            </Suspense>
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
