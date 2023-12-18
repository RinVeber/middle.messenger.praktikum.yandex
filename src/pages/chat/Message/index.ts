import {IStylesBlock} from '../../../types';
import Block from '../../../libs/Block';
import  './index.scss';

interface MessageProps {
  text: string;
  isCurrentUser: boolean;
}

class Message extends Block<IStylesBlock<MessageProps>> {
  constructor(props: MessageProps) {
    super({
      ...props,
      class: !props.isCurrentUser ? 'letter__current-user' : 'letter',
      styleText: 'letter__text',
    });
  }

  render() {
    return this.compile('<div class={{class}}><span class={{styleText}}>{{text}}</span><div>', this.props);
  }
}

export default Message;
