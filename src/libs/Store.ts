import { type IUser } from '../api/authApi'
import set from './helperFunction/set'
import EventBus from './EventBus'

export interface IState {
  user?: IUser
  chats?: any[]
  chatId?: string
  chatAvatar?: string
  chatToken?: string
  messages?: string[]
}

export enum StoreEvents {
  Update = 'updated',
}

class Store extends EventBus {
  private readonly state: IState = {}

  getState(): IState {
    return this.state
  }

  setState(path: string, value: unknown): void {
    set(this.state, path, value)

    this.emit(StoreEvents.Update, this.getState())
  }
}

const store = new Store()
export default store
