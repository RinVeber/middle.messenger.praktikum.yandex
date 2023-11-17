import Block from '../../libs/Block';
import template from './index.hbs';

interface InputProps {
  class?: string;
  id: string;
  value?: string;
  type: string;
  name: string 
  required?: boolean; 
  disabled?: boolean;
  readonly?: boolean;
  classLabel?: string;
  pattern?: RegExp;
  placeholder?: string;
  events?: {
    change?: () => void;
    focusout?: (event: HTMLFormElement) => void;
  }
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props)
  }
}
