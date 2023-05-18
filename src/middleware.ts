import {
  withMiddlewareAuthRequired,
  getSession
} from '@auth0/nextjs-auth0/edge'
import { NextResponse } from 'next/server'
import { UserProfile } from '@auth0/nextjs-auth0/client'
import { ERoutes } from '@/utils/constants'

import type { NextRequest } from 'next/server'

export default withMiddlewareAuthRequired(async function middleware(
  request: NextRequest
) {
  const response = NextResponse.next()
  const session = await getSession(request, response)
  const user: UserProfile | undefined = session?.user
  const shouldRedirectToAccountVerification =
    user !== undefined && !user?.email_verified

  if (shouldRedirectToAccountVerification) {
    return NextResponse.redirect(
      new URL(ERoutes.ACCOUNT_VERIFICATION, request.url)
    )
  }
  return response
})

export const config = {
  matcher: ['/dashboard/:path*']
}
