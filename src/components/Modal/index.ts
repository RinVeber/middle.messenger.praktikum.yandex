import Block from '../../libs/Block';
import isEqual from '../../libs/helperFunction/isEqual';
import closeIcon from '../../assets/icons/close.svg';
import IconButton from '../IconButton';
import './index.scss';

interface IModalProps {
  isShow: boolean;
}

export abstract class Modal extends Block {
  constructor(props: IModalProps) {
    super({
      ...props,
      class: 'overlay',
      closeButton: new IconButton({
        iconUrl: closeIcon,
        variant: 'close',
        events: {
          click: () => {
            this.setProps({
              isShow: false,
            });
          },
        },
      }),
    });
  }

  abstract renderModal(): string;

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (newProps.isShow) {
      this.element?.classList.add('show');
    } else {
      this.element?.classList.remove('show');
    }
    return isEqual(oldProps, newProps);
  }

  render() {
    return this.compile(
      `<div>
      <div class="popup">
        {{{closeButton}}}
        ${this.renderModal()}
      </div>
    </div>`,
      this.props,
    );
  }
}

export default Modal;
