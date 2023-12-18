import Button from '../../../../components/Button';
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import ChatController from '../../../../controllers/chatController';
import { IState } from '../../../../libs/Store';
import withStore from '../../../../libs/WithStore';
import { required } from '../../../../utils/validate';
import template from './template';

class AddUserForm extends Form {
  init(): void {
    this.children.idInput = new Input({
      label: 'id',
      name: 'id',
      validate: required,
    });
    this.children.buttonAdd = new Button({
      label: 'Добавить',
    });
  }

  async submit(value: { id: string }): Promise<void> {
    await ChatController.addUserInChat({
      users: [value.id],
      chatId: this.props.chatId,
    });
    this.props.events.close();
  }

  renderForm(): string {
    return template();
  }
}

const withStateToProps = (state: IState) => ({
  chatId: state.chatId,
});

export default withStore(withStateToProps)(AddUserForm);
