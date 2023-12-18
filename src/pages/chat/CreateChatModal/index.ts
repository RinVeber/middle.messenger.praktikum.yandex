import Modal from '../../../components/Modal';
import CreateForm from './CreateForm';

class CreateChatModal extends Modal {
  protected init(): void {
    this.children.CreateChatForm = new CreateForm({
      events: {
        close: () => {
          this.setProps({
            isShow: false,
          });
        },
      },
    });
  }

  renderModal(): string {
    return '{{{CreateChatForm}}}';
  }
}

export default CreateChatModal;
