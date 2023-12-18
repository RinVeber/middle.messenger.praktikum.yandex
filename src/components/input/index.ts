import { IStylesBlock } from '../../types';
import Block from '../../libs/Block';
import InputError from './Error';
import InputField from './InputField';
import template from './template';

interface InputProps {
  label?: string;
  name: string;
  variant?: 'standard' | 'custom';
  type?: 'password';
  events?: {
    focus?: () => void;
    blur?: () => void;
    focusout?: (event: HTMLFormElement) => void;
  };
  validate?: (value: string) => string;
}

export class Input extends Block<IStylesBlock<InputProps>> {
  isValid: boolean = true;

  constructor(props: InputProps) {
    super({
      ...props,
    });
  }

  init(): void {
    this.children.input = new InputField({
      ...this.props,
      events: {
        blur: () => {
          if (this.props.validate) {
            const inputBlock = this.children.input as Block;
            const element = inputBlock.element as HTMLInputElement;
            const { value } = element;
            const error = this.props.validate(value);
            this.isValid = !error;
            (this.children.error as Block).setProps({ text: error });
          }
        },
      },
    });

    this.children.error = new InputError({ text: '' });
  }

  render() {
    return this.compile(template(), this.props);
  }
}

export default Input;
