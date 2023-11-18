import { LinkButton } from '../../components';
import Block from '../../libs/Block';
import FormValidator from '../../libs/Validation';
import template from './index.hbs';
import { RegisterForm } from './components';

interface IRegisterPageProps {
  title: string;
}

export class RegisterPage extends Block<IRegisterPageProps> {
  constructor(props: IRegisterPageProps) {
    super(props);
  } 

  init() {
    this.children.BackLinkButton = new LinkButton({
      class: "absolute",
      secondary: true,
      label: "Назад",
      path: "/" 
    });

    this.children.RegistrationForm = new RegisterForm({
      events: {
        submit: (event) => {
          event.preventDefault();
          new FormValidator(this.element as HTMLElement).init();
        },
      }
    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
