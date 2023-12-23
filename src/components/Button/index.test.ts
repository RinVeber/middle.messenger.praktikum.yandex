import { expect } from 'chai'
import sinon from 'sinon'
import Block from '../../libs/Block/Block'
import { type IStylesBlock } from '../../types'
import { type ButtonProps } from '.'

describe('Button test', () => {
  class Button extends Block<IStylesBlock<ButtonProps>> {
    render() {
      return this.compile('{{label}}', this.props)
    }
  }

  it('Клик по кнопке', () => {
    const callback = sinon.stub()
    const button = new Button({
      label: 'Button',
      events: {
        click: callback
      }
    })
    button.element?.click()

    expect(callback.calledOnce).to.eq(false)
  })
})
