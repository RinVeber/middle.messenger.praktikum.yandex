import { Router } from './Router';
import { expect } from 'chai';
import sinon from 'sinon';
import Block from '../Block/Block';

describe('Router', () => {
  const router = new Router('#app');
  const originalBack = window.history.back;
  const originalForward = window.history.forward;
  const originalPushState = window.history.pushState;
  const getContentFake = sinon.fake.returns(document.createElement('div'));

  beforeEach(() => {
    router.reset();
    window.history.forward = sinon.fake();
    window.history.back = sinon.fake();
    window.history.pushState = sinon.fake();
  });

  after(() => {
    window.history.forward = originalForward;
    window.history.back = originalBack;
    window.history.pushState = originalPushState;
  });

  // it('Переход по защищенному роуту', () => {
  //   router.use('test', Block);
  //   router.go('test');
  //   expect(getContentFake.callCount).to.eq(1);
  // });

  it('Добавление в историю браузера', () => {
    router.forward();

    expect((window.history.forward as any).callCount).to.eq(1);
  });

  it('Возвращение на предыдущую страницу в браузере', () => {
    router.back();

    expect((window.history.back as any).callCount).to.eq(1);
  });

  it('Страница логина на роуте /', () => {
    router.go('/');
    expect(window.location.href).to.be.eq('http://localhost:5173/');
  });

  it('Редирект роутов', () => {
    router.use('/not-found', Block).use('/sign-up', Block).start();

    router.forward();

    expect(router.routes).to.have.lengthOf(2);
  });

  it('Должен идти по указанному маршруту', () => {
    router.go('test');

    expect((window.history.pushState as any).callCount).to.eq(1);
  });
});
