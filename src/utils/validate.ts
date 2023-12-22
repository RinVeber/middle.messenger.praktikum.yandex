export const required = (value: string) => (value.length > 0
  ? ''
  : 'Обязательное для заполнения')

export const validateEmail = (value: string) => {
  const regexp = /^[A-Za-z-_\d]+@[A-Za-z-_\d]+\.[A-Za-z-_\d]+$/
  return regexp.test(value)
    ? ''
    : 'Некорректный email'
}

export const validatePassword = (value: string) => {
  const regexp = /^.*(([A-Z].*[\d])|([\d].*[A-Z])).*$/
  return regexp.test(value)
    ? ''
    : 'Обязательно должен сдержать заглавную букву и цифру.'
}

export const validateName = (value: string) => {
  const regexp = /^[A-ZА-Я][a-zA-Zа-я-А-Я-]*$/
  return regexp.test(value)
    ? ''
    : 'Первая буква должна быть заглавной.'
}

export const validateLogin = (value: string) => {
  const regexp = /^[\da-zA-Z_-]*[a-zA-Z][\da-zA-Z_-]*$/
  return regexp.test(value) && value.length >= 3 && value.length <= 20
    ? ''
    : 'Длина от 3 до 20 символов. Должен содержать хотя бы одну заглавную букву'
}

export const validatePhone = (value: string) => {
  const regexp = /^(\+)?[\d]{10,15}$/
  return regexp.test(value)
    ? ''
    : 'Номер телефона должен содержать от 10 до 15 цифр'
}
