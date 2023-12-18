import Block from '../../../libs/Block';
import template from './template';
import AvatarInput from '../../../components/AvatarInput';
import ChatController from '../../../controllers/chatController';
// import { IUser } from '../../../api/authApi';
import { getDay } from '../../../utils/dateTransform';

export interface IMessageList {
  name: string;
  id: number;
  avatar?: string;
  nameUser: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  isRead: boolean;
  // lastMessage: {
  //   content: string;
  //   id: number;
  //   time: string;
  //   user: IUser
  // }
  active?: boolean;
  events?: {
    click: (event: Event) => void;
  };
}

export class MessageList extends Block<IMessageList> {
  constructor(props: IMessageList) {
    super({
      ...props,
      time: getDay(props.time),
      isRead: props.unreadCount > 0 ? true : false
    });
  }
  init(): void {
    this.children.inputAvatar = new AvatarInput({
      name: `avatar${this.props.id}`,
      value: this.props.avatar,
      size: '50px',
      events: {
        change: (event) => {
          const formData = new FormData();
          if (event.target.files?.[0]) {
            formData.append('avatar', event.target.files?.[0]);
            formData.append('chatId', this.props.id.toString());
            ChatController.updateAvatar(formData);
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template(), this.props);
  }
}
