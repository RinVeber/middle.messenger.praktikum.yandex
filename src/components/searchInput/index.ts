import Block from '../../libs/Block';
import template from './index.hbs';
import './index.scss';

interface InputSearchProps {
  class?: string;
  id: string;
  value?: string;
  type: string;
  name: string 
  required?: boolean; 
  disabled?: boolean;
  readonly?: boolean;
  pattern?: RegExp;
  placeholder?: string;
  events?: {
    change?: () => void;
    focusout?: (event: HTMLFormElement) => void;
  }
}

export class InputSearch extends Block<InputSearchProps> {
  constructor(props: InputSearchProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props)
  }
}
