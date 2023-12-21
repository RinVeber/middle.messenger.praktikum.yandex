import { expect } from 'chai';
import sinon from 'sinon';
import Input from '.';

describe('Input component', () => {
  it('Валидация по блюру', () => {
    const callback = sinon.stub();

    const props = {
      label: 'label',
      name: 'name',
      validate: callback,
    };

    const input = new Input(props);

    const inputElement = input.element?.querySelector('input');
    inputElement?.blur();

    const blurEvent = global.document.createEvent('Event');
    blurEvent?.initEvent('blur', true, true);
    inputElement?.dispatchEvent(blurEvent);

    expect(callback.called).to.eq(true);
  });
});
