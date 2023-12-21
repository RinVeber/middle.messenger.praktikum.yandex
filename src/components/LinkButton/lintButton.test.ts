import { expect } from 'chai';
import LinkButton from '.';

describe('Link component', () => {
  it('Should be navigate to href', () => {
    const originalHref = window.location.href;
    const href = 'test';
    const link = new LinkButton({text: 'link', href});
    link.element?.click();

    expect(window.location.href).to.eq(`${originalHref}${href}`);
  });
});