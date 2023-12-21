import Block from '../../libs/Block/Block';
import defaultAvatar from '../../assets/images/defaultAvatar.svg';

interface IAvatarProps {
  avatar?: string;
  isExistAvatar?: boolean;
  defaultAvatar?: string;
}

export class AvatarDefault extends Block<IAvatarProps> {
  constructor(props: IAvatarProps) {
    super({ ...props, defaultAvatar: defaultAvatar });
  }

  render() {
    return this.compile(
      `{{#if avatar}}
    <img class="avatar-chat" src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}"/>
    {{else}}
    <img class="avatar-chat" src="{{defaultAvatar}}"/>
    {{/if}}`,
      this.props,
    );
  }
}
