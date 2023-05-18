import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import getManagementAPIToken from '@/utils/getManagementAPIToken'
import type { NextApiRequest, NextApiResponse } from 'next'

export default withApiAuthRequired(async function verificationEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const accessToken = await getManagementAPIToken()
    const session = await getSession(req, res)
    const response = await fetch(
      process.env.AUTH0_ISSUER_BASE_URL + `/api/v2/jobs/verification-email`,
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${accessToken}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          user_id: session!.user.sub
        })
      }
    )
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})
