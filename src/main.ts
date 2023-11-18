import './index.scss';
import * as dataPages from './pages/index';
import { Routes } from './utils';
import render from './utils/renderDOM';

window.addEventListener('DOMContentLoaded', async () => {
  const { href } = window.location;
  const { origin } = window.location;

  switch (href) {
    case `${origin}${Routes.Main}`:
      render(new dataPages.HomePage(dataPages.navLinkListContext));
      break;
    case `${origin}${Routes.Login}`:
      render(new dataPages.LoginPage(dataPages.loginContext));
      break;
    case `${origin}${Routes.Register}`:
      render(new dataPages.RegisterPage(dataPages.registrationContext));
      break;
    case `${origin}${Routes.Profile}`:
      render(new dataPages.ProfilePage(dataPages.profileContext));
      break;
    case `${origin}${Routes.Chat}`:
      render(new dataPages.ChatPage(dataPages.chatContext));
      break;
    case `${origin}${Routes.NotFound}`:
      render(new dataPages.ErrorsPage(dataPages.statusErrorContext.notFound));
      break;
    case `${origin}${Routes.ServerError}`:
      render(
        new dataPages.ErrorsPage(dataPages.statusErrorContext.serverError),
      );
      break;
    default:
      render(new dataPages.ErrorsPage(dataPages.statusErrorContext.notFound));
  }
});
