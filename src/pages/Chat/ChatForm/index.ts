import template from './template'
import Input from '../../../components/Input'
import IconButton from '../../../components/IconButton'
import Form from '../../../components/Form'
import { required } from '../../../utils/validate'
import type Block from '../../../libs/Block/Block'
import fileAddIcon from '../../../assets/icons/add.svg'
import send from '../../../assets/icons/send.svg'

interface ChatFormModel {
  message: string
}

class ChatForm extends Form {
  constructor(props: any) {
    super(props)
  }

  init(): void {
    this.children.inputMessage = new Input({
      name: 'message',
      variant: 'custom',
      validate: required
    })
    this.children.buttonSend = new IconButton({
      iconUrl: send,
      variant: 'icon',
      type: 'submit'
    })
    this.children.buttonFileAdd = new IconButton({
      iconUrl: fileAddIcon,
      type: 'button',
      variant: 'icon'
    })
  }

  submit(values: ChatFormModel): void {
    this.props.submit(values);
    ((this.children.inputMessage as Block).children.input as Block).setProps({
      value: ''
    })
  }

  renderForm(): string {
    return template()
  }
}

export default ChatForm
