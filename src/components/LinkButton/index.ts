import { IStylesBlock } from '../../types';
import Block from '../../libs/Block/Block';
import './index.scss';
import color from './constants';

interface ILinkButtonProps {
  href: string;
  text: string;
  color?: 'primary' | 'secondary';
}

export class LinkButton extends Block<
  Omit<IStylesBlock<ILinkButtonProps>, 'color'> & { color: string }
> {
  constructor(props: ILinkButtonProps) {
    super({
      ...props,
      class: 'link',
      color: color[props.color || 'primary'],
    });
  }

  render() {
    return this.compile(
      '<a class="{{class}}" style="color:{{color}}" href="{{href}}">{{text}}</a>',
      this.props,
    );
  }
}

export default LinkButton;
