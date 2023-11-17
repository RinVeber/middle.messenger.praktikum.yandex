import { Button, Input } from '../../../../components';
import Block from '../../../../libs/Block';
import FormValidator from '../../../../libs/Validation';
import template from './index.hbs';
import { Routes } from '../../../../utils';

interface IRegisterFormProps {
  events?: {
    submit: (event: HTMLFormElement) => void;
  }
}

export class RegisterForm extends Block<IRegisterFormProps> {
  constructor(props: IRegisterFormProps) {
    super(props);
  } 

  init() {
    this.children.EmailInput = new Input({
      class:"register__input",
      name:"email",
      id:"email",
      type:"text",
      placeholder:"Почта",
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        }
      }
    })

    this.children.LoginInput = new Input({
      class:"register__input",
      name:"login",
      id:"login",
      type:"text",
      placeholder:"Логин",
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        }
      }
    })

    this.children.FirstNameInput = new Input({
      class:"register__input",
      name:"first_name",
      id:"first_name",
      type:"text",
      placeholder:"Имя",
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        }
      }
    })

    this.children.SecondNameInput = new Input({
      class:"register__input",
      name:"second_name",
      id:"second_name",
      type:"text",
      placeholder:"Фамилия",
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        }
      }
    })

    this.children.PhoneInput = new Input({
      class:"register__input",
      name:"phone",
      id:"phone",
      type:"text",
      placeholder:"Телефон",
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        }
      }
    })

    this.children.PasswordInput = new Input({
      class:"register__input",
      name:"password",
      id:"password",
      type:"text",
      placeholder:"Пароль",
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        }
      }
    })

    this.children.PasswordRepeatInput = new Input({
      class:"register__input",
      name:"passwordRepeat",
      id:"passwordRepeat",
      type:"text",
      placeholder:"Повторите пороль",
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        }
      }
    })

    this.children.RegistrationButton = new Button({
      class:"register__button",
      label:"Зарегистрироваться",
      type:"submit",
    })

    this.children.LoginButton = new Button({
      class: "register__button",
      secondary: true,
      label: "Войти",
      events: {
        click: () => location.replace(`${Routes.Login}`),
      },
    })
  
  }

  render() {
    return this.compile(template, this.props);
  }
}
