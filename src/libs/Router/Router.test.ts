import { expect } from 'chai';
import router from './Router';
import { LoginPage } from '../../pages';
import {NotFoundPage} from '../../pages';

describe('Router Tests', () => {
  beforeEach(() => {
    router.routes = [];
  });

  it('Должен добавляться в роутер', () => {
    router.use('/not-found', NotFoundPage).use('sign-in', LoginPage);

    expect(router.routes).to.have.lengthOf(2);
  });

  it('Переход по роуту', () => {
    router.use('/sign-in', LoginPage).start();
    router.go('/sign-in');
    expect(window.location.pathname).to.be.eq('/sign-in');
  });

  it('Переход "назад"', () => {
    router
      .use('/sign-in', LoginPage)
      .start();

    router.back();

    expect(router.routes.length).to.eq(1);
  });

  it('Редирект роутов', () => {
    router
      .use('/not-found', NotFoundPage)
      .use('/sign-up', LoginPage)
      .start();

    router.forward();

    expect(router.routes).to.have.lengthOf(2);
  });
});