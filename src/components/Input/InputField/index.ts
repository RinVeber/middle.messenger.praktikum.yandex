import { IStylesBlock } from '../../../types';
import Block from '../../../libs/Block';
import isEqual from '../../../libs/helperFunction/isEqual';
import './index.scss';

export interface InputFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  variant?:'custom' | 'standard' ;
  events?: {
    focus?: () => void;
    blur?: () => void;
    focusout?: (event: HTMLFormElement) => void;
  };
}

class InputField extends Block<IStylesBlock<InputFieldProps>> {
  constructor(props: InputFieldProps) {
    super({
      ...props,
      class: props.variant || 'standard',
    });
  }

  protected componentDidUpdate(
    oldProps: IStylesBlock<InputFieldProps>,
    newProps: IStylesBlock<InputFieldProps>,
  ): boolean {
    if (!isEqual(oldProps, newProps)) {
      return true;
    }
    if (
      newProps.value !== undefined &&
      (this.element as HTMLInputElement).value !== newProps.value
    ) {
      return true;
    }
    return false;
  }

  render() {
    return this.compile(
      `<input
      class="{{class}}"
      placeholder="{{placeholder}}"
      value="{{value}}"
      name="{{name}}"
      type="{{type}}"
    />`,
      this.props,
    );
  }
}

export default InputField;
