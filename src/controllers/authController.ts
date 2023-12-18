import authApi, { ISigninData, ISignupData } from '../api/authApi';
import router from '../libs/Router';
import store from '../libs/Store';
import Routes from '../utils/constants';

class AuthController {
  static async fetchUser() {
    const user = await authApi.getUser();

    store.setState('user', user);
  }

  static async logout() {
    try {
      await authApi.logout();
      store.setState('user', undefined);

      router.go(Routes.Login);
    } catch (e) {
      console.error(e);
    }
  }

  static async signin(data: ISigninData) {
    try {
      await authApi.signin(data);
      await this.fetchUser();
      router.go(Routes.Chat);
    } catch (e) {
      console.error(e);
    }
  }

  static async signup(data: ISignupData) {
    try {
      await authApi.signup(data);
      await this.fetchUser();

      router.go(Routes.Chat);
    } catch (e) {
      console.error(e);
    }
  }

}

export default AuthController;
