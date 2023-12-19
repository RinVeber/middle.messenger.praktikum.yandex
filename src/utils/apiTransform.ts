export type UserTransform = {
    id: number;
    login: string;
    email: string;
    second_name: string;
    display_name: string;
    avatar: string;
    first_name: string;
    phone: string;

  };
  
  export type ChatTransform = {
    id: number;
    title: string;
    avatar: string;
    created_by: number;
    unread_count: number;
    last_message: string;
  }
  
  export type MessageTransform = {
    id: number;
    
    type: string;
    time: string;
    user_id: number;
    chat_id: number;
    content: string;
    is_read: boolean;
    file: null;
  }

export type User = {
  id: number;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  avatar: string;
  phone: string;
  email: string;
};

export type Chat = {
  id: number;
  title: string;
  avatar: string;
  createdBy: number;
  unreadCount: number;
  lastMessage: string;
}

export type MessageType = {
  id: number;
  userId: number;
  chatId: number;
  type: string;
  time: string;
  content: string;
  isRead: boolean;
  file: null;
}

export const transformUser = (data: UserTransform): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    avatar: data.avatar ? 'https://ya-praktikum.tech/api/v2/resources/' + data.avatar : '',
    phone: data.phone,
    email: data.email,
  };
};

export const transformChat = (chat: ChatTransform): Chat => {
  return {
    id: chat.id,
    title: chat.title,
    avatar: chat.avatar ? 'https://ya-praktikum.tech/api/v2/resources/' + chat.avatar : '',
    createdBy: chat.created_by,
    unreadCount: chat.unread_count,
    lastMessage: chat.last_message,
  }
};

export const transformChats = (data: ChatTransform[]): Chat[] => {
  return data.map(chat => {
    return {
      id: chat.id,
      title: chat.title,
      avatar: chat.avatar ? 'https://ya-praktikum.tech/api/v2/resources/' + chat.avatar : '',
      createdBy: chat.created_by,
      unreadCount: chat.unread_count,
      lastMessage: chat.last_message,
    };
  })
};

export const transformMessages = (data: MessageTransform[]): MessageType[] => {
  return data.map(message => {
    return {
      id: message.id,
      userId: message.user_id,
      chatId: message.chat_id,
      type: message.type,
      time: message.time,
      content: message.content,
      isRead: message.is_read,
      file: message.file,
    };
  })
}

export const transformMessage = (message: MessageTransform): MessageType => {
  return {
    id: message.id,
    userId: message.user_id,
    chatId: message.chat_id,
    type: message.type,
    time: message.time,
    content: message.content,
    isRead: message.is_read,
    file: message.file,
  };
}
