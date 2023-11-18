import './index.scss';
import * as dataPages from './pages/index';
import { Routes } from './utils';
import render from './utils/renderDOM';
// import { BASE_URL, HOME, CHATS, LOGIN , REGISTER, PROFILE, ERROR404, ERROR500 } from './utils/constants/routes';

// const path = window.location.pathname;

// function replacePath() {
//   return window.location.replace(`${BASE_URL}${HOME}`);
// }

// if (path === "/") {
//   replacePath();
// } else if (path === ERROR404) {
//   render(new dataPages.ErrorsPage(dataPages.statusErrorContext.notFound));
// } else if (path === ERROR500) {
//   render(
//     new dataPages.ErrorsPage(dataPages.statusErrorContext.serverError),
//   );
// } else if (path === LOGIN) {
//   render(new dataPages.LoginPage(dataPages.loginContext));
// } else if (path === REGISTER) {
//   render(new dataPages.RegisterPage(dataPages.registrationContext));
// } else if (path === PROFILE) {
//   render(new dataPages.ProfilePage(dataPages.profileContext));
// } else if (path === CHATS) {
//   render(new dataPages.ChatPage(dataPages.chatContext));
// }

window.addEventListener('DOMContentLoaded', async () => {
  const { origin, href } = window.location;
  console.log(`${origin}${Routes.Login}`);

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
