import template from './index.hbs';
import Block from '../../libs/Block';

interface IHomePageProps {
  title?: string;
  routes: {
    title: string,
    path: string,
  }[]
}

export class HomePage extends Block<IHomePageProps> {
  constructor(props: IHomePageProps) {
    super(props);
  } 

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
