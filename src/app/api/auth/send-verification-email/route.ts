import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'
import { getManagementAPIToken } from '@/services'

export const GET = withApiAuthRequired(async function GET(req) {
  const res = new NextResponse()
  const accessToken = await getManagementAPIToken()
  const session = await getSession(req, res)
  const response = await fetch(
    process.env.AUTH0_ISSUER_BASE_URL + `/api/v2/jobs/verification-email`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: session!.user.sub
      }),
      redirect: 'follow'
    }
  )

  if (response.ok) {
    const data = response.json()
    return NextResponse.json(data, res)
  }

  return NextResponse.json('Error', { status: response.status })
})
