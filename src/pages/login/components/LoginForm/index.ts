import { Button, Input } from '../../../../components';
import FormValidator from '../../../../libs/Validation';
import Block from '../../../../libs/Block';
import template from './index.hbs';
import { Routes } from '../../../../utils';

interface ILoginFormProps {
  class?: string,
  action?: string,
  method?: string,
  events?: {
    submit: (event: HTMLFormElement) => void;
    focusout?: (event: HTMLFormElement) => void;
  }
}

export class LoginForm extends Block<ILoginFormProps> {
  constructor(props: ILoginFormProps) {
    super(props);
  } 

  init() {
    this.children.LoginInput = new Input({
      class:"login__input",
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

    this.children.PasswordInput = new Input({
      class:"login__input",
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

    this.children.LoginButton = new Button({
      class:"login__button",
      label:"Войти",
      type:"submit",
    })

    this.children.RegistrationButton = new Button({
      class: "login__button",
      secondary: true,
      type: "button",
      label: "Ещё не зарегистрированы?",
      events: {
        click: () => location.replace(`${Routes.Register}`),
      },
    })
  
  }

  render() {
    return this.compile(template, this.props);
  }
}
