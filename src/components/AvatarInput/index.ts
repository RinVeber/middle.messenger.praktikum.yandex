import Block from '../../libs/Block/Block'
import ImageInput, { type ImageInputProps } from '../ImageInput'
import template from './template'

export class AvatarInput extends Block<ImageInputProps> {
  constructor(props: ImageInputProps) {
    super({
      ...props,
      size: props.size || '130px'
    })
  }

  init(): void {
    this.children.inputAvatar = new ImageInput({
      name: this.props.name || 'avatar',
      events: {
        ...this.props.events,
        change: (event) => {
          if ((event.currentTarget as HTMLElement).id === this.props.name) {
            this.props.events?.change?.(event)
          }
        },
        click: (event) => {
          event.stopPropagation()
        }
      }
    })
  }

  render() {
    return this.compile(template(), this.props)
  }
}

export default AvatarInput
