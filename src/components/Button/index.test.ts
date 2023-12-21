import { expect } from 'chai';
import sinon from 'sinon';
import Block from '../../libs/Block/Block';
import { IStylesBlock } from '../../types';
import { type ButtonProps } from '.';

describe('Button test', () => {
  class Button extends Block<IStylesBlock<ButtonProps>> {
    render() {
      return this.compile(`{{label}}`, this.props);
    }
  }

  const callback = sinon.stub();

  const props = {
    label: 'Button',
    events: {
      click: callback,
    },
  };

  it('Клик по кнопке', () => {
    const button = new Button(props);
    button.element?.click();

    expect(callback.calledOnce).to.eq(true);
  });

});
