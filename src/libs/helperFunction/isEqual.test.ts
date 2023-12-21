import { expect } from 'chai';
import isEqual from './isEqual';

describe('isEqual', () => {
  it('возвращает равный объект', () => {
    const a = { a: 1 };
    const b = { a: 1 };

    expect(isEqual(a,b)).to.eq(true);
  });

  it('возвращает не равный объект', () => {
    const a = { a: 1 };
    const c = { c: 1 };

    expect(isEqual(a,c)).to.eq(false);
  });
});
