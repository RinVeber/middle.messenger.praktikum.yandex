import template from './index.hbs';
import { Profiles } from '../../types';
import Block from '../../../../libs/Block';
import './index.scss';

interface IProfileListProps {
  profiles: Profiles,
}

export class ProfileList extends Block<IProfileListProps> {
  constructor(props: IProfileListProps) {
    super(props);
  } 

  render() {
    return this.compile(template, this.props);
  }
}
