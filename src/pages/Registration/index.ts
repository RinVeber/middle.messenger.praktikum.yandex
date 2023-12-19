import Block from '../../libs/Block';
import './index.scss';
import RegistrationForm from './RegistrationForm';
import FormValidator from '../../libs/Validation';
import router from '../../libs/Router';
import Routes from '../../utils/constants';
import AuthController from '../../controllers/authController';

export interface ISignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export class RegisterPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.RegisterForm = new RegistrationForm({
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
            ) as unknown as ISignUpData;

            AuthController.signup(data).then(() => {
              router.go(Routes.Chat);
            });
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(
      `<section class="register"><div class="register__container">{{{RegisterForm}}}</div></section>`,
      this.props,
    );
  }
}

export default RegisterPage;
