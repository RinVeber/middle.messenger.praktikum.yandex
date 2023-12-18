import { IStylesBlock } from '../../types';
import Block from '../../libs/Block';
import './index.scss';

interface ITitleProps {
  text: string;
}

export class Title extends Block<IStylesBlock<ITitleProps>> {
  constructor(props: ITitleProps) {
    super({
      ...props,
      class: 'title',
    });
  }

  render() {
    return this.compile('<h1 class="{{class}}">{{text}}</h1>', this.props);
  }
}

export default Title;
