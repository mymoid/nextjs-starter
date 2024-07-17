import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import { ThemeRegistry } from '@/components/themeRegistry/ThemeRegistry'
import { META_CONFIGS } from '@/components/seo/metas'
import { locales } from '@/utils/constants/locales.constants'
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
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Suspense>
            <FloatingComponents />
            <main>{children}</main>
          </Suspense>
        </ThemeRegistry>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
