import Block from '../../libs/Block';
import Input from '../Input';
import './index.scss';

export abstract class Form extends Block {
  constructor({ events, ...props }: any) {
    super({
      ...props,
      events: {
        ...events,
        submit: (event: any) => {
          event.preventDefault();
          this.markAllAsTouched();
          if (this.check()) {
            const formData = new FormData(this.element as HTMLFormElement);
            const values = Object.fromEntries(formData);
            this.submit(values);
          }
        },
      },
    });
  }

  abstract submit(value: any): void;
  abstract renderForm(): string;

  markAllAsTouched(): void {
    Object.keys(this.children).forEach((childName) => {
      if (this.children[childName] instanceof Input) {
        const element = this.children[childName] as Input;
        const input = element.children.input as Block;
        input.element!.dispatchEvent(new Event('blur'));
      }
    });
  }

  check(): boolean {
    let res = true;
    Object.keys(this.children).forEach((childName) => {
      if (this.children[childName] instanceof Input) {
        res = res && (this.children[childName] as Input).isValid;
      }
    });
    return res;
  }

  render() {
    return this.compile(
      `<form class='form'>${this.renderForm()}</form>`,
      this.props,
    );
  }
}

export default Form;
