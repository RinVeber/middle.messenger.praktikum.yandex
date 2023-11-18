import { Button, LinkButton, AvatarDefault } from '../../components';
import Block from '../../libs/Block';
import { ProfileForm, ProfilePassword } from './components';
import template from './index.hbs';
import FormValidator from '../../libs/Validation';
import { Routes } from '../../utils';

interface IProfilePageProps {
  isProfileChange: boolean;
  condition?: boolean;
  avatar?: string;
  isEdit: boolean;
  NameProfile? : string;
}

export class ProfilePage extends Block<IProfilePageProps> {
  constructor(props: IProfilePageProps) {
    super(props);
  } 

  init() {
    this.children.BackLinkButton = new LinkButton({
      class: "profile__lside profile__backUrl",
      secondary: true,
      label: "Назад",
      path: "/" 
    });

    this.children.AvatarDefault = new AvatarDefault({})

    this.children.ProfileForm = new ProfileForm({
      isEdit: this.props.isEdit,
      events: {
        submit: (event) => {
          event.preventDefault();
          new FormValidator(this.element as HTMLElement).init();
        },
      }
    });

    this.children.ProfilePassword = new ProfilePassword({
      isEdit: this.props.isEdit,
      events: {
        submit: (event) => {
          event.preventDefault();
          new FormValidator(this.element as HTMLElement).init();
        },
      }
    });

    this.children.SaveButton = new Button({
      label: "Сохранить",
      type:"submit",
    });

    this.children.ChangeFormButton = new Button({
      label: 'Сменить форму',
      type:"button",
      events: {
        click: () => {
          this.setProps({
            isProfileChange: !this.props.isProfileChange,
            isEdit: this.props.isEdit,
          })
        },
      }
    });
    

    this.children.ButtonOut = new Button({
      label: "Выйти",
      class: "profile__button profile__button-logout",
      secondary: true,
      type:"button",
      events: {
        click: () => location.replace(`${Routes.Login}`),
      }
    })

  }

  render() {
    return this.compile(template, this.props);
  }
}
