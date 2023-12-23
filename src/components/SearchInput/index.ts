import Block from '../../libs/Block/Block'
import template from './template'
import './index.scss'

interface IInputSearchProps {
  class?: string
  id: string
  value?: string
  type: string
  name: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  pattern?: RegExp
  placeholder?: string
  events?: {
    change?: () => void
    focusout?: (event: HTMLFormElement) => void
  }
}

export class InputSearch extends Block {
  constructor(props: IInputSearchProps) {
    super(props)
  }

  render() {
    return this.compile(template(), this.props)
  }
}
