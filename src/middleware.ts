import createMiddleware from 'next-intl/middleware'
import { locales } from './utils/constants/locales.constants'

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  localePrefix: 'never',
  // Used when no locale matches
  defaultLocale: 'en'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
