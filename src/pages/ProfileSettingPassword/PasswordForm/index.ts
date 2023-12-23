import template from './template'
import Title from '../../../components/Title'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Form from '../../../components/Form'
import { required, validatePassword } from '../../../utils/validate'
import type PasswordFormModel from './PasswordForm.model'
import router from '../../../libs/Router/Router'
import UserController from '../../../controllers/userController'
import AvatarInput from '../../../components/AvatarInput'
import AuthController from '../../../controllers/authController'
import type Block from '../../../libs/Block/Block'
import store, { type IState, StoreEvents } from '../../../libs/Store'
import Routes from '../../../utils/constants'
import withStore from '../../../libs/WithStore'

class PasswordForm extends Form {
  constructor(props: any) {
    super(props)
  }

  init(): void {
    this.children.title = new Title({ text: 'profile_name' })
    this.children.inputOldPassword = new Input({
      label: 'Старый пароль',
      name: 'oldPassword',
      type: 'password',
      validate: required
    })
    this.children.inputNewPassword = new Input({
      label: 'Новый пароль',
      name: 'newPassword',
      type: 'password',
      validate: validatePassword
    })
    this.children.inputConfirmPassword = new Input({
      label: 'Повторите новый пароль',
      name: 'confirmPassword',
      type: 'password',
      validate: required
    })
    this.children.buttonSave = new Button({
      label: 'Сохранить'
    })
    this.children.buttonCancel = new Button({
      label: 'Отмена',
      type: 'button',
      variant: 'secondary',
      events: {
        click: () => {
          router.go(Routes.Profile)
        }
      }
    })
    this.children.inputAvatar = new AvatarInput({
      name: 'avatar',
      events: {
        change: (event) => {
          const formData = new FormData()
          if (event.target.files?.[0]) {
            formData.append('avatar', event.target.files?.[0])
            UserController.updateAvatar(formData)
          }
        }
      }
    })
  }

  protected componentDidMount(): void {
    store.on(StoreEvents.Update, (value) => {
      if (value.user) {
        (this.children.inputAvatar as Block).setProps({
          value: value.user.avatar
        })
      }
    })
    AuthController.fetchUser()
  }

  submit(values: PasswordFormModel): void {
    UserController.updatePassword(values)
  }

  renderForm(): string {
    return template()
  }
}

const withStateToProps = (state: IState) => ({
  ...state.user
})

export default withStore(withStateToProps)(PasswordForm)
