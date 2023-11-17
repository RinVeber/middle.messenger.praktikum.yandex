import { LinkButton } from '../../components';
import Block from '../../libs/Block';
import FormValidator from '../../libs/Validation';
import template from './index.hbs';
import { LoginForm } from './components/LoginForm';

interface ILoginPageProps {
  title: string;
}

export class LoginPage extends Block<ILoginPageProps> {
  constructor(props: ILoginPageProps) {
    super(props);
  } 

  init() {
    this.children.BackLinkButton = new LinkButton({
      class: "absolute",
      secondary: true,
      label: "Назад",
      path: "/" 
    });

    this.children.LoginForm = new LoginForm({
      class:"login__form form",
      action:"/.",
      method:"get",      
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
