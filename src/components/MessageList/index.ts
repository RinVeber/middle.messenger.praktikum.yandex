import Block from '../../libs/Block';
import template from './index.tmpl';
import AvatarInput from '../AvatarInput';
import ChatController from '../../controllers/chatController';

export interface IMessageList {
  name: string;
  id: number;
  avatar?: string;
  active?: boolean;
  events?: {
    click: (event: Event) => void;
  };
}

export class MessageList extends Block<IMessageList> {
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
