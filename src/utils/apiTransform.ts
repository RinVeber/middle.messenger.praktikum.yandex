export interface UserTransform {
  id: number
  login: string
  email: string
  second_name: string
  display_name: string
  avatar: string
  first_name: string
  phone: string

}

export interface ChatTransform {
  id: number
  title: string
  avatar: string
  created_by: number
  unread_count: number
  last_message: string
}

export interface MessageTransform {
  id: number

  type: string
  time: string
  user_id: number
  chat_id: number
  content: string
  is_read: boolean
  file: null
}

export interface User {
  id: number
  login: string
  firstName: string
  secondName: string
  displayName: string
  avatar: string
  phone: string
  email: string
}

export interface Chat {
  id: number
  title: string
  avatar: string
  createdBy: number
  unreadCount: number
  lastMessage: string
}

export interface MessageType {
  id: number
  userId: number
  chatId: number
  type: string
  time: string
  content: string
  isRead: boolean
  file: null
}

export const transformUser = (data: UserTransform): User => ({
  id: data.id,
  login: data.login,
  firstName: data.first_name,
  secondName: data.second_name,
  displayName: data.display_name,
  avatar: data.avatar ? `https://ya-praktikum.tech/api/v2/resources/${data.avatar}` : '',
  phone: data.phone,
  email: data.email
})

export const transformChat = (chat: ChatTransform): Chat => ({
  id: chat.id,
  title: chat.title,
  avatar: chat.avatar ? `https://ya-praktikum.tech/api/v2/resources/${chat.avatar}` : '',
  createdBy: chat.created_by,
  unreadCount: chat.unread_count,
  lastMessage: chat.last_message
})

export const transformChats = (data: ChatTransform[]): Chat[] => data.map((chat) => ({
  id: chat.id,
  title: chat.title,
  avatar: chat.avatar ? `https://ya-praktikum.tech/api/v2/resources/${chat.avatar}` : '',
  createdBy: chat.created_by,
  unreadCount: chat.unread_count,
  lastMessage: chat.last_message
}))

export const transformMessages = (data: MessageTransform[]): MessageType[] => data.map((message) => ({
  id: message.id,
  userId: message.user_id,
  chatId: message.chat_id,
  type: message.type,
  time: message.time,
  content: message.content,
  isRead: message.is_read,
  file: message.file
}))

export const transformMessage = (message: MessageTransform): MessageType => ({
  id: message.id,
  userId: message.user_id,
  chatId: message.chat_id,
  type: message.type,
  time: message.time,
  content: message.content,
  isRead: message.is_read,
  file: message.file
})
