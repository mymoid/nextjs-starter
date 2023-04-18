import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0'
import getAbsoluteURL from '@/utils/getAbsoulteURL'

export default handleAuth({
  async signup(req, res) {
    await handleLogin(req, res, {
      authorizationParams: { screen_hint: 'signup' }
    })
  },
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: getAbsoluteURL('/', req)
    })
  },
  async logout(req, res) {
    await handleLogout(req, res, {
      returnTo: getAbsoluteURL('/', req)
    })
  }
})
