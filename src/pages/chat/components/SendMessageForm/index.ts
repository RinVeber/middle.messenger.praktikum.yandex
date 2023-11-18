import { Button, Input } from '../../../../components';
import fileAddIcon from '../../../../assets/images/add.svg';
import sendIcon from '../../../../assets/images/send.svg';
import template from './index.hbs';
import Block from '../../../../libs/Block';
import './index.scss';

interface ISendMessageFormProps {
  class?: string,
  action?: string,
  method?: string,
  events?: {
    submit: (event: HTMLFormElement) => void;
  }
}

export class SendMessageForm extends Block<ISendMessageFormProps> {
  constructor(props: ISendMessageFormProps) {
    super(props);
  } 

  init() {
    this.children.FileAddButton = new Button({
      class: "writer__button writer__button--icon",
      secondary: true,
      image: {
        src: fileAddIcon,
        alt: 'add file'
      }
    });

    this.children.MessageInput = new Input({
      class:"writer__input",
      classLabel: "writer__label",
      name:"message",
      id:"message",
      required: true,
      type:"text",
      placeholder:"Сообщение",
    });
    

    this.children.SendButton = new Button({
      class: "writer__button writer__button--send",
      secondary: true,
      image: {
        src: sendIcon,
        alt: 'send message'
      },
      type:"submit",
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
