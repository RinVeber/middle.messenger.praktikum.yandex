import chatApi, { IAddUserChat, ICreateChat } from '../api/chatApi';
import store from '../libs/Store';

class ChatController {
  static async getChats() {
    try {
      const chats = await chatApi.getChats();

      store.setState('chats', chats);
    } catch (error) {
      console.error(error);
    }
  }

  static async createChat(value: ICreateChat) {
    try {
      await chatApi.createChat(value);
      await this.getChats();
    } catch (error) {
      console.error(error);
    }
  }

  static async getChatToken(id: string) {
    try {
      const getToken = await chatApi.getChatToken(id);

      store.setState('chatToken', getToken.token);
    } catch (error) {
      console.error(error);
    }
  }

  static async addUserInChat(data: IAddUserChat) {
    try {
      await chatApi.addUserInChat(data);
    } catch (error) {
      console.error(error);
    }
  }

  static async removeUserInChat(data: IAddUserChat) {
    try {
      await chatApi.removeUserInChat(data);
    } catch (error) {
      console.error(error);
    }
  }

  static async updateAvatar(data: FormData) {
    try {
      await chatApi.updateAvatar(data);
      await this.getChats();
    } catch (error) {
      console.error(error);
    }
  }
}

export default ChatController;
