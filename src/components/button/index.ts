import template from './index.hbs';
import Block from '../../libs/Block';

interface IButtonProps {
  type?: string;
  secondary?: boolean;
  class?: string; 
  disabled?: boolean;
  image?: {
    src: string,
    alt?: string,
  }
  label?: string;
  events?: {
    click: () => void;
  }
}

export class Button extends Block<IButtonProps> {
  constructor(props: IButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props)
  }
}
