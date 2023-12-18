import { IStylesBlock } from '../../types';
import Block from '../../libs/Block';
import './index.scss';

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
      `<button
      class="{{class}}"
      type="{{type}}"
      {{#if disabled}}
        disabled
      {{/if}}
    >{{label}}</button>`,
      this.props,
    );
  }
}

export default Button;
