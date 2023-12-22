import userApi, { type IPasswordUpdateData, type IUserUpdateData } from '../api/userApi'
import router from '../libs/Router/Router'
import Routes from '../utils/constants'
import AuthController from './authController'

export default class UserController {
  static async updateUser(data: IUserUpdateData) {
    try {
      await userApi.updateProfile(data)
      await AuthController.fetchUser()
    } catch (error) {
      console.error(error)
    }
  }

  static async updateAvatar(data: FormData) {
    try {
      await userApi.updateAvatar(data)
      await AuthController.fetchUser()
    } catch (error) {
      console.error(error)
    }
  }

  static async updatePassword(data: IPasswordUpdateData) {
    try {
      await userApi.updatePassword(data)

      router.go(Routes.Profile)
    } catch (error) {
      console.error(error)
    }
  }
}
