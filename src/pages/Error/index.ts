import template from './template'
import LinkButton from '../../components/LinkButton'
import Block from '../../libs/Block/Block'
import Routes from '../../utils/constants'

export class ErrorPage extends Block {
  constructor() {
    super({})
  }

  init(): void {
    this.children.link = new LinkButton({
      href: Routes.Chat,
      text: 'Назад к чатам'
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template(), this.props)
  }
}

export default ErrorPage
