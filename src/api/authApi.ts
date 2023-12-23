import BaseAPI from '../utils/baseApi'

export interface ISignupData {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export interface ISigninData {
  login: string
  password: string
}

export interface IUser {
  id: number
  first_name: string
  second_name: string
  display_name: string
  phone: string
  login: string
  avatar: string
  email: string
}

class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth')
  }

  async signup(data: ISignupData) {
    return await this.http.post('/signup', { data })
  }

  async signin(data: ISigninData) {
    return await this.http.post('/signin', { data })
  }

  async logout() {
    return await this.http.post('/logout')
  }

  async getUser() {
    return await this.http.get<IUser>('/user')
  }
}

export default new AuthAPI()
