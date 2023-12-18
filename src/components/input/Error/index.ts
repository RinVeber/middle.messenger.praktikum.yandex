import { IStylesBlock } from '../../../types';
import Block from '../../../libs/Block';
import './index.scss';

interface InputErrorProps {
  text: string;
}

class InputError extends Block<IStylesBlock<InputErrorProps>> {
  constructor(props: InputErrorProps) {
    super(props);
  }

  render() {
    return this.compile(
      '<span class="error__text">{{text}}</span>',
      this.props,
    );
  }
}

export default InputError;
