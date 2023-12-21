import Block from '../../libs/Block/Block';
import './index.scss';
import LoginForm from './LoginForm';
import FormValidator from '../../libs/Validation';
import AuthController from '../../controllers/authController';
import Routes from '../../utils/constants';
import router from '../../libs/Router/Router';

export interface ISignInData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export class LoginPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.LoginForm = new LoginForm({
      events: {
        submit: (event) => {
          event.preventDefault();

          const validator = new FormValidator(this.element as HTMLElement);
          validator.init();

          if (validator.getIsFormValid()) {
            const form = this.element!.querySelector('form');
            const formData = new FormData(form!);
            const data = Object.fromEntries(
              formData.entries(),
            ) as unknown as ISignInData;

            AuthController.signin(data).then(() => {
              router.go(Routes.Chat);
            });
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(
      `<section class="login"><div class="login__container">{{{LoginForm}}}</div></section>`,
      this.props,
    );
  }
}

export default LoginPage;
