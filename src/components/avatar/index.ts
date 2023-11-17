import template from './index.hbs';
import Block from '../../libs/Block';
import defaultPic from '../../assets/images/Union.jpg';

interface IAvatarProps {
  label?: string;
  events?: {
    click: () => void;
  }
}

export class AvatarDefault extends Block<IAvatarProps> {
    image: {
        src: string,
        alt?: string,
      }
  constructor(props: IAvatarProps) {
    super(props);
    this.image = {
        src: defaultPic,
        alt: 'Аватар'
    }
  }

  render() {
    return this.compile(template, this.props)
  }
}
