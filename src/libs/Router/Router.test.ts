import { expect } from 'chai';
import router from './Router';
import { LoginPage } from '../../pages';
import {NotFoundPage} from '../../pages';

describe('Router Tests', () => {
  beforeEach(() => {
    router.routes = [];
  });

  it('should add a routes', () => {
    router.use('/not-found', NotFoundPage).use('sign-in', LoginPage);

    expect(router.routes).to.have.lengthOf(2);
  });

  it('should go route', () => {
    router.use('/sign-in', LoginPage).start();
    router.go('/sign-in');
    expect(window.location.pathname).to.be.eq('/sign-in');
  });

  it('Testing back', () => {
    router
      .use('/sign-in', LoginPage)
      .start();

    router.back();

    expect(router.routes.length).to.eq(1);
  });

  it('should forward route', () => {
    router
      .use('/not-found', NotFoundPage)
      .use('/sign-up', LoginPage)
      .start();

    router.forward();

    expect(router.routes).to.have.lengthOf(2);
  });
});