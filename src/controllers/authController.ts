import authApi, { type ISigninData, type ISignupData } from '../api/authApi'
import router from '../libs/Router/Router'
import store from '../libs/Store'
import Routes from '../utils/constants'

class AuthController {
  static async fetchUser() {
    const user = await authApi.getUser()
    store.setState('user', user)
  }

  static async logout() {
    try {
      await authApi.logout()
      store.setState('user', undefined)
      router.go(Routes.Login)
    } catch (error) {
      console.error(error)
    }
  }

  static async signin(data: ISigninData) {
    try {
      await authApi.signin(data)
      await this.fetchUser()
      router.go(Routes.Chat)
    } catch (error: any) {
      if (error?.reason === 'User already in system') router.go('/messenger')
      console.error(error)
    }
  }

  static async signup(data: ISignupData) {
    try {
      await authApi.signup(data)
      await this.fetchUser()

      router.go(Routes.Chat)
    } catch (error) {
      console.error(error)
    }
  }
}

export default AuthController
