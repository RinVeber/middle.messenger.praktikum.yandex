import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import './scss/index.scss';
import avatar from './images/Union.svg';
import search from './images/search.svg';

type PagesType =
  | 'login'
  | 'register'
  | 'chat'
  | 'not-found'
  | 'server-error'
  | 'profile'
  | 'profile-change-password'
  | 'profile-change-data';

const pages = {
  login: [Pages.LoginPage],
  register: [Pages.RegisterPage],
  chat: [Pages.ChatPage, { search: search, avatar_user: avatar }],
  'not-found': [Pages.NotFoundPage],
  'server-error': [Pages.ServerErrorPage],
  profile: [Pages.ProfilePage, { avatar: avatar }],
  'profile-change-password': [
    Pages.ProfileChangePasswordPage,
    { avatar: avatar },
  ],
  'profile-change-data': [Pages.ProfileChangeDataPage, { avatar: avatar }],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: PagesType) {
  const [source, context] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', (e) => {
  if (!e.target) return;

  const el = e.target as HTMLButtonElement;
  const page = el.getAttribute('page') as PagesType;

  if (page.length > 0) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
