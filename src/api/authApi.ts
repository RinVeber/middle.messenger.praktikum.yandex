import BaseAPI from '../utils/baseApi';

export interface ISignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string; 
  password: string;
  phone: string; 
}

export interface ISigninData {
  login: string;
  password: string;
}

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
}

class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signup(data: ISignupData) {
    return this.http.post('/signup', { data });
  }

  signin(data: ISigninData) {
    return this.http.post('/signin', { data });
  }

  logout() {
    return this.http.post('/logout');
  }

  getUser() {
    return this.http.get<IUser>('/user');
  }
}

export default new AuthAPI();
