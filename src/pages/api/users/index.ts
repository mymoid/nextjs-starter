import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import getManagementAPIToken from '@/utils/getManagementAPIToken'
import { userFromDto } from '@/mappers/user.mapper'
import type { NextApiRequest, NextApiResponse } from 'next'

export default withApiAuthRequired(async function users(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const accessToken = await getManagementAPIToken()
    const session = await getSession(req, res)

    const response = await fetch(
      process.env.AUTH0_ISSUER_BASE_URL + `/api/v2/users/${session!.user.sub}`,
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${accessToken}`,
          'content-type': 'application/json'
        }
      }
    )
    const data = await response.json()
    const mappedData = userFromDto(data)
    res.status(200).json(mappedData)
  } catch (error) {
    res.status(500).json(error)
  }
})
