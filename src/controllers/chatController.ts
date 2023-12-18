import chatApi, { IAddUserChat, ICreateChat } from '../api/chatApi';
import store from '../libs/Store';

class ChatController {
  static async getChats() {
    try {
      const chats = await chatApi.getChats();

      store.setState('chats', chats);
    } catch (e) {
      console.error(e);
    }
  }

  static async createChat(value: ICreateChat) {
    try {
      await chatApi.createChat(value);
      await this.getChats();
    } catch (e) {
      console.error(e);
    }
  }

  static async getChatToken(id: string) {
    try {
      const getToken = await chatApi.getChatToken(id);

      store.setState('chatToken', getToken.token);
    } catch (e) {
      console.error(e);
    }
  }

  static async addUserInChat(data: IAddUserChat) {
    try {
      await chatApi.addUserInChat(data);
    } catch (e) {
      console.error(e);
    }
  }

  static async removeUserInChat(data: IAddUserChat) {
    try {
      await chatApi.removeUserInChat(data);
    } catch (e) {
      console.error(e);
    }
  }

  static async updateAvatar(data: FormData) {
    try {
      await chatApi.updateAvatar(data);
      await this.getChats();
    } catch (e) {
      console.error(e);
    }
  }
}

export default ChatController;
