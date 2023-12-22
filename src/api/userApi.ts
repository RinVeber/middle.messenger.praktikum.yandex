import BaseAPI from '../utils/baseApi'
import { type IUser } from './authApi'

export type IUserUpdateData = Omit<IUser, 'avatar' | 'id'>
export interface IPasswordUpdateData {
  oldPassword: string
  newPassword: string
}

class UserAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  async updateAvatar(data: FormData) {
    return await this.http.put('/profile/avatar', { data })
  }

  async updateProfile(data: IUserUpdateData) {
    return await this.http.put('/profile', { data })
  }

  async updatePassword(data: IPasswordUpdateData) {
    return await this.http.put('/password', { data })
  }
}

export default new UserAPI()
