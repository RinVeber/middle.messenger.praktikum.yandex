import { type ICreateChat } from '../../../../api/chatApi'
import Button from '../../../../components/Button'
import Form from '../../../../components/Form'
import Input from '../../../../components/Input'
import ChatController from '../../../../controllers/chatController'
import { required } from '../../../../utils/validate'
import template from './template'

class CreateForm extends Form {
  constructor(props: any) {
    super(props)
  }

  init(): void {
    this.children.nameInput = new Input({
      label: 'Наименование',
      name: 'title',
      validate: required
    })
    this.children.buttonCreate = new Button({
      label: 'Создать'
    })
  }

  async submit(value: ICreateChat): Promise<void> {
    await ChatController.createChat(value)
    this.props.events.close()
  }

  renderForm(): string {
    return template()
  }
}

export default CreateForm
