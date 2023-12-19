import Block from '../../libs/Block';
import PasswordForm from './PasswordForm';

export class PasswordSettingPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.PasswordForm = new PasswordForm({});
  }

  protected render(): DocumentFragment {
    return this.compile('<section class="profile">{{{PasswordForm}}}<section>', this.props);
  }
}

export default PasswordSettingPage;
