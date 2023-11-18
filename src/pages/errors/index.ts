import template from './index.hbs';
import Block from '../../libs/Block';
import { Button, LinkButton } from '../../components';

interface IErrorsPageProps {
  errorCode: string;
  errorText: string;
}

export class ErrorsPage extends Block<IErrorsPageProps> {
  constructor(props: IErrorsPageProps) {
    super(props);
  } 

  init() {
    this.children.BackLinkButton = new LinkButton({
      class: "absolute",
      secondary: true,
      label: "Назад",
      path: "/" 
    });

    this.children.BackToChatButton = new Button({
      class: "status__button",
      secondary: true,
      label: "Назад к чатам",
      type:"button",
      events: {
        click: () => location.replace('/chat'),
      }
    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
