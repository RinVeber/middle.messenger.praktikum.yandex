import * as Pages from './pages';
import * as Componets from './components';
import Block from './libs/Block';
import './index.scss';
import router from './libs/Router';
import AuthController from './controllers/authController';
import Routes from './utils/constants';
import { registerComponent } from './utils/registerComponents';

Object.entries(Componets).forEach(([name]) => {
  const componentLc = Componets[name as keyof typeof Componets] as typeof Block;

  registerComponent(name, componentLc);
});

window.addEventListener('DOMContentLoaded', async () => {
  let isProtectedRoute = true;

  router
    .use(Routes.Chat, Pages.ChatPage)
    .use(Routes.Register, Pages.RegisterPage)
    .use(Routes.Login, Pages.LoginPage)
    .use(Routes.Password, Pages.PasswordSettingPage)
    .use(Routes.Profile, Pages.ProfilePage)
    .use(Routes.NotFound, Pages.NotFoundPage)
    .use(Routes.ErrorPage, Pages.ErrorPage);

  switch (window.location.pathname) {
    case Routes.Login:
    case Routes.Register:
      isProtectedRoute = false;
      break;
    default:
  }

  if (!Object.values(Routes).includes(window.location.pathname as Routes)) {
    router.start();
    router.go(Routes.NotFound);

    return;
  }

  try {
    await AuthController.fetchUser();
    router.start();
    if (!isProtectedRoute) {
      router.go(window.location.pathname);
    }
  } catch (error) {
    router.start();
    console.log('%cstore updated', 'background: #22222; color: #bada55');
    if (isProtectedRoute) {
      router.go(Routes.Login);
    }
  }
});
