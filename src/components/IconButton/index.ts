import {IStylesBlock} from '../../types';
import Block from '../../libs/Block';
import './index.scss'
import template from './template';

export interface IconButtonProps {
  events?: {
    click?: () => void;
  };
  iconUrl: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'icon' | 'close';
  disabled?: boolean;
}

export class IconButton extends Block<IStylesBlock<IconButtonProps>> {
  constructor(props: IconButtonProps) {
    super({
      ...props,
      class: props.variant || 'button',
    });
  }

  render() {
    return this.compile(template(), this.props);
  }
}

export default IconButton;
