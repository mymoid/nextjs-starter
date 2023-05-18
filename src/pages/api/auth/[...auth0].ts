import {
  handleAuth,
  handleLogin,
  handleLogout,
  handleProfile
} from '@auth0/nextjs-auth0'
import getAbsoluteURL from '@/utils/getAbsoulteURL'
import { ERoutes } from '@/utils/constants'

export default handleAuth({
  async signup(req, res) {
    await handleLogin(req, res, {
      authorizationParams: { screen_hint: 'signup' }
    })
  },
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: getAbsoluteURL(ERoutes.DASHBOARD, req)
    })
  },
  async logout(req, res) {
    await handleLogout(req, res, {
      returnTo: getAbsoluteURL(ERoutes.HOME, req)
    })
  },
  async refetch(req, res) {
    // Refresh the user session
    await handleProfile(req, res, { refetch: true })
  }
})
