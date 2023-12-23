import Block from '../../../libs/Block/Block'
import template from './template'
// import { IUser } from '../../../api/authApi';
import { getDay } from '../../../utils/dateTransform'
import defaultAvatar from '../../../assets/images/defaultAvatar.svg'

export interface IMessageList {
  name: string
  id: number
  avatar?: string
  nameUser?: string
  lastMessage: string
  time: string
  unreadCount: number
  isRead: boolean
  isAvatar: boolean
  // lastMessage: {
  //   content: string;
  //   id: number;
  //   time: string;
  //   user: IUser
  // }
  active?: boolean
  events?: {
    click: (event: Event) => void
  }
}

export class MessageList extends Block<IMessageList> {
  constructor(props: IMessageList) {
    super({
      ...props,
      isAvatar: props.avatar == null ? false : true,
      avatar: props.avatar || defaultAvatar,
      time: props.time != '' ? getDay(props.time) : 'now',
      isRead: props.unreadCount > 0
    })
  }

  init(): void {

  }

  protected render(): DocumentFragment {
    return this.compile(template(), this.props)
  }
}
