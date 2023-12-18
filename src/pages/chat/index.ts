import template from './index.tmpl';
import Block from '../../libs/Block';
import './index.scss'
import LinkButton from '../../components/LinkButton';
import Button from '../../components/Button';
import { MessageList } from './MessageList';
import ChatForm from './ChatForm';
import ChatController from '../../controllers/chatController';
import IconButton from '../../components/IconButton';
import createChat from '../../assets/icons/createChat.svg';
import userAdd from '../../assets/icons/userAdd.svg';
import userDelete from '../../assets/icons/userDelete.svg';
import CreateChatModal from './CreateChatModal';
import store, { IState, StoreEvents } from '../../libs/Store';
import WSTransport, { WebSoketEvents } from '../../libs/WebSoket';
import AddUserModal from './AddUserModal';
import Message from './Message';
import DeleteUserModal from './DeleteUserModal';
import withStore from '../../libs/WithStore';
import Routes from '../../utils/constants';
import { InputSearch } from '../../components/SearchInput';
import AvatarInput from '../../components/AvatarInput';
import UserController from '../../controllers/userController';

 class Chat extends Block {
  ws: WSTransport | undefined;
  chatToken: string = '';

  constructor() {
    super({
      activeModal: null,
    });
  }

  init(): void {
    this.children.linkProfile = new LinkButton({
      href: Routes.Profile,
      color: 'primary',
      text: 'Профиль',
    });
    this.children.inputSearch = new InputSearch({
      id: "search",
      class: "chat__input-search",
      type: "text",
      name: "search",
    });

    this.children.MoreButton = new Button({
      type: 'button',
      variant: 'secondary',
      label: '....'
    })
    this.children.SendMessageForm = new ChatForm({
      submit: (values: any) => {
        this.ws?.send({
          type: 'message',
          content: values.message,
        });
      },
    });
    this.children.createChatModal = new CreateChatModal({
      isShow: false,
    });
    this.children.addUserModal = new AddUserModal({
      isShow: false,
    });
    this.children.deleteUserModal = new DeleteUserModal({
      isShow: false,
    });


    this.children.createChatButton = new IconButton({
      variant: 'icon',
      type: 'button',
      iconUrl: createChat,
      events: {
        click: () => {
          (this.children.createChatModal as Block).setProps({
            isShow: true,
          });
        },
      },
    });

    this.children.inputAvatar = new AvatarInput({
      name: 'avatar',
      events: {
        change: (event) => {
          const formData = new FormData();
          if (event.target.files?.[0]) {
            formData.append('avatar', event.target.files?.[0]);
            UserController.updateAvatar(formData);
          }
        },
      },
    });


    this.children.addUserButton = new IconButton({
      iconUrl: userAdd,
      variant: 'icon',
      type: 'button',
      events: {
        click: () => {
          (this.children.addUserModal as Block).setProps({
            isShow: true,
          });
        },
      },
      disabled: true,
    });

    this.children.removeUserButton = new IconButton({
      variant: 'icon',
      iconUrl: userDelete,
      type: 'button',
      events: {
        click: () => {
          (this.children.deleteUserModal as Block).setProps({
            isShow: true,
          });
        },
      },
      disabled: true,
    });
  }

  chatConnect(id: string): void {
    store.setState('messages', []);
    ChatController.getChatToken(id);
  }

  protected componentDidMount(): void {
    store.on(StoreEvents.Update, (value: IState) => {
      if (value.chats) {
        this.children.chatModals = value.chats?.map((chat, i) => new MessageList({
          ...chat,
          active: chat.id === this.props.activeModal,
          events: {
            click: (event) => {
              if ((event.target as HTMLElement).localName !== 'label') {
                this.setProps({ activeModal: chat.id });
                (this.children.chatModals as Block[])[i].setProps({
                  active: true,
                });
                (this.children.addUserButton as Block).setProps({
                  disabled: false,
                });
                (this.children.removeUserButton as Block).setProps({
                  disabled: false,
                });
                store.setState('chatId', chat.id);
                this.chatConnect(chat.id);
              }
            },
          },
        }));
      }

      if (value.chatToken && value.chatToken !== this.chatToken) {
        this.chatToken = value.chatToken;
        if (this.ws) {
          this.ws.close();
        }
        this.ws = new WSTransport(`/chats/${value.user?.id}/${value.chatId}/${value.chatToken}`);
        this.ws.connected().then(() => {
          this.ws?.send({
            content: '0',
            type: 'get old',
          });
        }).catch((e) => {
          console.error(e);
        });
        this.ws.on(WebSoketEvents.Message, (message) => {
          if (Array.isArray(message)) {
            store.setState('messages', message.reverse());
          } else {
            store.setState('messages', (store.getState().messages || [])?.concat(message));
          }
        });
      }

      if (value.messages) {
        this.children.messages = value.messages?.map((message: any) => (
          new Message({
            text: message.content,
            isCurrentUser: message.user_id === this.props.user.id,
          })));
        const timeoutId = setTimeout(() => {
          if (window.document.getElementById('chatsList')
            && window.document.getElementById('chatsList')?.scrollHeight) {
            window.document.getElementById('chatsList')?.scrollTo({
              top: window.document.getElementById('chatsList')?.scrollHeight,
            });
          }
          clearTimeout(timeoutId);
        });
      }
    });
    ChatController.getChats();
  }

  protected render(): DocumentFragment {
    return this.compile(template(), this.props);
  }
}

const withStateToProps = (state: IState) => ({
  chats: state.chats,
  chatToken: state.chatToken,
  user: state.user,
  messages: state.messages,
});

export const ChatPage =  withStore(withStateToProps)(Chat);
