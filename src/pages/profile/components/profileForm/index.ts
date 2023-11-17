import Block from '../../../../libs/Block';
import { Input, Button } from '../../../../components';
import template from './index.hbs';

interface IProfileFormProps {
  isEdit?: boolean,
  events?: {
    submit: (event: HTMLFormElement) => void;
  }
}

export class ProfileForm extends Block<IProfileFormProps> {
  constructor(props: IProfileFormProps) {
    super(props);
  } 

  init() {
    this.children.EmailInput = new Input({
      class:"profile__input",
      name:"email",
      type:"email",
      id:"email",
      value:"email@yandex.ru",
      placeholder:"Введите почту",
    });

    this.children.LoginInput = new Input({
      class:"profile__input",
      name: "login", 
      id: "login",
      type: "text",
      value: "Login",
      placeholder: "Введите логин",
    });

    this.children.FirstNameInput = new Input({
      class:"profile__input",
      name:'first_name',
      id:"first_name",
      type:"text",
      value:"First",
      placeholder:"Введите имя",
    })

    this.children.SecondNameInput = new Input({
      class:"profile__input",
      name:'second_name',
      id:"second_name",
      type:"text",
      value:"Second",
      placeholder:"Введите фамилию",
    })

    this.children.DisplayNameInput = new Input({
      class:"profile__input",
      name:'display_name',
      id:"display_name",
      type:"text",
      value:"Display name",
      placeholder:"Введите ваше имя в чате",
    })

    this.children.PhoneInput = new Input({
      class:"profile__input",
      name:'phone',
      id:"phone",
      type:"text",
      value:"79362231130",
      placeholder:"Введите ваш номер телефона",
    })
    this.children.NicknameInput = new Input({
      class:"profile__input",
      name:'nickname',
      id:"nickname",
      type:"text",
      value:"Никнейм",
      placeholder:"Ваш Никнейм",
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
