import template from './index.hbs';
import Block from '../../libs/Block';
import { Button, LinkButton, InputSearch } from '../../components';
import { SendMessageForm, MessageWindow, ProfileList } from './components';
import { ProfileDetails, Profiles } from './types';
import FormValidator from '../../libs/Validation';
import { Routes } from '../../utils';

interface IChatPageProps {
  contentShow?: boolean;
  profiles: Profiles,
  profileDetails: ProfileDetails,
}

export class ChatPage extends Block<IChatPageProps> {
  constructor(props: IChatPageProps) {
    super(props);
  } 

  init() {
    this.children.BackLinkButton = new LinkButton({
      class: "absolute",
      secondary: true,
      label: "Назад",
      path: "/" 
    });

    this.children.ProfileButton = new Button({
      class: "chat__lside-button chat__lside-button--text",
      secondary: true,
      label: "Профиль",
      events: {
        click: () => location.replace(`${Routes.Profile}`),
      }

    });

    this.children.SearchInput = new InputSearch({
      id: "search",
      class: "chat__input-search",
      type: "text",
      name: "search",
    });

    this.children.ProfileList = new ProfileList({
      profiles: this.props.profiles,
    });

    this.children.MessageWindow = new MessageWindow({
      rangeMessages: this.props.profileDetails.rangeMessages,
    })

    this.children.MoreButton = new Button({
      secondary: true,
      label: "...",
    });

    this.children.SendMessageForm = new SendMessageForm({
      events: {
        submit: (event) => {
          event.preventDefault();
          new FormValidator(this.element as HTMLElement).init();
        },
      }
    })

  }

  render() {
    return this.compile(template, this.props);
  }
}
