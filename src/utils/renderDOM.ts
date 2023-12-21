import Block from '../libs/Block/Block';

export default function render(component: Block) {
  const root = document.querySelector('#app');
  root?.append(component.getContent()!);
  component.dispatchComponentDidMount();
}
