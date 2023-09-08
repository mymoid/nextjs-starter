export default async function getManagementAPIToken() {
  try {
    const response = await fetch(
      process.env.AUTH0_ISSUER_BASE_URL + '/oauth/token',
      {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: `${process.env.AUTH0_CLIENT_ID}`,
          client_secret: `${process.env.AUTH0_CLIENT_SECRET}`,
          audience: process.env.AUTH0_ISSUER_BASE_URL + '/api/v2/'
        })
      }
    )
    const data = await response.json()
    return data.access_token
  } catch (error) {
    throw new Error(error as any)
  }
}
