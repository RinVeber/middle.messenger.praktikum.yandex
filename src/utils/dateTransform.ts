import { type MessageType } from './apiTransform'

export interface GroupedMessages {
  day: string
  messages?: MessageType[]
}

export enum Months {
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
}

export function getDay(time: string) {
  const date = new Date(time)
  const formTime = `${date.getDate()} ${Months[date.getMonth()]}`
  return formTime
}

export function groupMessagesByDay(messages: MessageType[]): GroupedMessages[] {
  const grouped: Record<string, MessageType[]> = {}

  messages.forEach((message) => {
    const date = new Date(message.time)
    const day = `${date.getDate()} ${Months[date.getMonth()]}`

    if (!grouped[day]) {
      grouped[day] = []
    }

    grouped[day].push(message)
  })

  const result: GroupedMessages[] = Object.keys(grouped).map((day) => ({
    day
    // TODO: Сделать в следующем спринте отдельный компонент со списком всех сообщений
    // messages: grouped[day],
  }))

  return result
}
