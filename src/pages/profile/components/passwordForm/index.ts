import Block from '../../../../libs/Block';
import { Button, Input } from '../../../../components';
import template from './index.hbs';

interface IProfilePasswordProps {
  isEdit?: boolean;
  events?: {
    submit: (event: HTMLFormElement) => void;
  }
}

export class ProfilePassword extends Block<IProfilePasswordProps> {
  constructor(props: IProfilePasswordProps) {
    super(props);
  } 

  init() {
    this.children.OldPasswordInput = new Input({      
      class:"profile__input", 
      name:"oldPassword",
      type:"password",
      id:"oldPassword", 
      value:"11111",
      placeholder:"Введите старый пароль",
    });

    this.children.NewPasswordInput = new Input({
      class:"profile__input",
      name:"newPassword",
      type:"password",
      id:"newPassword", 
      value:"1111122",
      placeholder:"Введите новый пароль",
    })

    this.children.NewPasswordRepeatInput = new Input({
      class:"profile__input",
      name:"newPasswordRepeat", 
      type:"password",
      id:"newPasswordRepeat", 
      value:"1111122",
      placeholder:"Повторите новый пароль",
    })

    this.children.SaveButton = new Button({
      class:"profile__form-button",
      label: "Сохранить",
      type:"submit",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
