import Block from '../../libs/Block/Block';
import './index.scss';
import { HTMLInputEvent } from '../../types';

export interface ImageInputProps {
  name?: string;
  value?: string;
  events?: {
    focus?: () => void;
    blur?: () => void;
    change?: (event: HTMLInputEvent) => void;
    click?: (event: HTMLInputEvent) => void;
  };
  size?: string;
}

export class ImageInput extends Block<ImageInputProps> {
  render() {
    return this.compile(
      `<input class="image__container" id="{{name}}" name="{{name}}" type="file" />`,
      this.props,
    );
  }
}

export default ImageInput;
