import Block from '../../libs/Block/Block';
import ProfileForm from './ProfileForm';
import { IState } from '../../libs/Store';
import withStore from '../../libs/WithStore';

class ProfileComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.form = new ProfileForm({});
  }

  protected render(): DocumentFragment {
    return this.compile(
      '<section class="profile">{{{form}}}</section>',
      this.props,
    );
  }
}

const withStateToProps = (state: IState) => ({
  ...state.user,
});

export const ProfilePage = withStore(withStateToProps)(ProfileComponent);

export default ProfilePage;
