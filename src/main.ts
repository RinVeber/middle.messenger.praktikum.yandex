// import * as Pages from './pages/index';
// import * as Componets from './components';
// import Block from './libs/Block';
// import { registerComponent } from './utils/registerComponents';
import './index.scss';
import router from './libs/Router';
import AuthController from './controllers/authController';
import Routes from './utils/constants';
import { ChatPage } from './pages/Chat';
import RegisterPage from './pages/Registration';
import ProfilePage from './pages/Profile';
import PasswordSettingPage from './pages/ProfileSettingPassword';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import ErrorPage from './pages/Error';

// Object.entries(Componets).forEach(([name]) => {
//   const componentLc = Componets[name as keyof typeof Componets] as typeof Block;

//   registerComponent(name, componentLc);
// });

window.addEventListener('DOMContentLoaded', async () => {
  let isProtectedRoute = true;

  router
    .use(Routes.Chat, ChatPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Login, LoginPage)
    .use(Routes.Password, PasswordSettingPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.NotFound, NotFoundPage)
    .use(Routes.ErrorPage, ErrorPage);

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
