import { expect } from 'chai'
import LinkButton from '.'

describe('Link component', () => {
  it('Должен переправлять по href', () => {
    const originalHref = window.location.href
    const href = 'link'
    const link = new LinkButton({ text: 'link', href: 'link' })
    link.element?.click()

    expect(window.location.href !== `${originalHref}${href}`).to.eq(true)
  })
})
