import Modal from '../../../components/Modal';
import AddUserForm from './AddUserForm';

class AddUserDailog extends Modal {
  protected init(): void {
    this.children.form = new AddUserForm({
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

export default AddUserDailog;
