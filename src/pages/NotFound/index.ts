import Block from '../../libs/Block';
import LinkButton from '../../components/LinkButton';
import Routes from '../../utils/constants';
import template from './index.tmpl'

export class NotFoundPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.link = new LinkButton({
      text: 'Назад к чатам',
      href: Routes.Chat,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template(), this.props);
  }
}

export default NotFoundPage;
