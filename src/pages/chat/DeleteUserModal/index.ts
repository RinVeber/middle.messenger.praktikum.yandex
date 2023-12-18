import Modal from '../../../components/Modal';
import DeleteUserForm from './DeleteUserForm';

class DeleteUserModal extends Modal {
  constructor(props: any) {
    super(props);
  }
  init(): void {
    this.children.form = new DeleteUserForm({
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
    return '{{{form}}}';
  }
}

export default DeleteUserModal;
