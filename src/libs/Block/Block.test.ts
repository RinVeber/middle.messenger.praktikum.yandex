import { expect } from 'chai'
import sinon from 'sinon'
import Block from './Block'

class FakeBlock extends Block {
  public compile() {
    return new DocumentFragment()
  }

  public render() {
    return this.compile()
  }
}

describe('Block', () => {
  let block: FakeBlock

  beforeEach(() => {
    block = new FakeBlock()
  })

  it('Поверка на установленые пропсы', () => {
    block.setProps({ name: 'Иван' })

    expect('name' in block.props).to.be.deep.equal('name' in block.props)
  })

  it('Проверка метода render()', () => {
    const spy = sinon.spy(block, 'render')
    block.render()

    expect(spy.callCount).to.equal(1)
  })
})
