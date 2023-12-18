enum Routes {
  Login = '/',
  Register = '/sign-up',
  Profile = '/settings',
  Chat = '/messenger',
  Password = '/settings/password',
  ErrorPage = '/error-page',
  NotFound = '/not-found',
}

export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
export const API_URL = 'https://ya-praktikum.tech/api/v2';

export default Routes;
