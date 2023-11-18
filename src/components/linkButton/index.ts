import Block from '../../libs/Block';
import template from './index.hbs';

interface ILinkButtonProps {
  class?: string;
  secondary?: boolean;
  path: string;
  label: string;
}

export class LinkButton extends Block<ILinkButtonProps> {
  constructor(props: ILinkButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props)
  }
}
