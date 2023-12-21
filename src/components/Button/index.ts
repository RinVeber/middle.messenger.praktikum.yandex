import { IStylesBlock } from '../../types';
import Block from '../../libs/Block/Block';
import template from './template';

export interface ButtonProps {
  label: string;
  variant?: 'filled' | 'text' | 'secondary' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  events?: {
    click?: () => void;
  };
}

export class Button extends Block<IStylesBlock<ButtonProps>> {
  constructor(props: ButtonProps) {
    super({
      ...props,
      class: props.variant || 'filled',
    });
  }

  render() {
    return this.compile(
     template(),
      this.props,
    );
  }
}

export default Button;
