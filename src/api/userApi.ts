import BaseAPI from '../utils/baseApi';
import { IUser } from './authApi';

export type IUserUpdateData = Omit<IUser, 'avatar' | 'id'>;
export type IPasswordUpdateData = {
  oldPassword: string;
  newPassword: string;
};

class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', { data });
  }

  updateProfile(data: IUserUpdateData) {
    return this.http.put('/profile', { data });
  }

  updatePassword(data: IPasswordUpdateData) {
    return this.http.put('/password', { data });
  }
}

export default new UserAPI();
