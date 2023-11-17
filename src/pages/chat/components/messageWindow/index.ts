import template from './index.hbs';
import { RangeMessages } from '../../types';
import Block from '../../../../libs/Block';
import './index.scss';

interface IMessageWindowProps {
  rangeMessages: RangeMessages;
}

export class MessageWindow extends Block<IMessageWindowProps> {
  constructor(props: IMessageWindowProps) {
    super(props);
  }

  init() {}

  render() {
    return this.compile(template, this.props);
  }
}
