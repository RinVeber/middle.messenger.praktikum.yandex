import BaseAPI from '../utils/baseApi'

export interface IAddUserChat {
  users: string[]
  chatId: string
}

export interface ICreateChat {
  title: string
}

class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats')
  }

  async getChats() {
    return await this.http.get('')
  }

  async createChat(data: ICreateChat) {
    return await this.http.post('', { data })
  }

  async getChatToken(id: string) {
    return await this.http.post<{ token: string }>(`/token/${id}`)
  }

  async addUserInChat(data: IAddUserChat) {
    return await this.http.put('/users', { data })
  }

  async removeUserInChat(data: IAddUserChat) {
    return await this.http.delete('/users', { data })
  }

  async updateAvatar(data: FormData) {
    return await this.http.put('/avatar', { data })
  }
}

export default new ChatAPI()
