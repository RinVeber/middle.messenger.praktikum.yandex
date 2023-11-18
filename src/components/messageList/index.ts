import template from './index.hbs';
import Block from '../../libs/Block';
import './index.scss';
import { Messages } from '../../pages/chat/types';

interface IMessageListProps {
    messages: Messages,
}

export class MessageList extends Block<IMessageListProps> {
  constructor(props: IMessageListProps) {
    super(props);
  } 

  render() {
    return this.compile(template, this.props);
  }
}
