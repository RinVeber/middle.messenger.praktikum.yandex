import { type IStylesBlock } from '../../../types'
import Block from '../../../libs/Block/Block'
import './index.scss'
import { getDay } from '../../../utils/dateTransform'

interface MessageProps {
  text: string
  time: string
  isCurrentUser: boolean
  nameUser: string
}

class Message extends Block<IStylesBlock<MessageProps>> {
  constructor(props: MessageProps) {
    super({
      ...props,
      time: getDay(props.time),
      class: !props.isCurrentUser ? 'letter__current-user' : 'letter',
      styleText: 'letter__text',
      nameUser: props.isCurrentUser ? 'Я' : 'Собеседник'
    })
  }

  render() {
    return this.compile(
      '<div class={{class}}><span class={{styleText}}>{{text}}</span><div class="letter__time"><p>{{nameUser}}</p><p>{{time}}</p></div><div>',
      this.props
    )
  }
}

export default Message
