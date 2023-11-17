export enum Routes {
  Main = '/',
  Login = '/login',
  Register = '/register',
  Chat = '/chat',
  Profile = '/profile',
  NotFound = '/not-found',
  ServerError = '/server-error',
}


export const BASE_URL = window.origin;
export const LOGIN = "/login";
export const REGISTER = "/register";
export const PROFILE_SETTING = "/profile-setting";
export const PASSWORD_SETTING = "/profile-password";
export const CHATS = "/chat";
export const ERROR404 = "/not-found";
export const ERROR500 = "/server-error";
export const ROOT_DIV = "#app";

export const inputsProperties = {
  login: {
    name: "login",
    label: "login",
    type: "text",
  },
  password: {
    name: "password",
    label: "password",
    type: "password",
  },
  passwordAgain: {
    name: "password (again)",
    label: "password (again)",
    type: "password",
  },
  oldPassword: {
    name: "old_password",
    label: "old password",
    type: "password",
  },
  email: {
    name: "email",
    label: "email",
    type: "email",
  },
  firstName: {
    name: "first_name",
    label: "name",
    type: "text",
  },
  secondName: {
    name: "second_name",
    label: "surname",
    type: "text",
  },
  phone: {
    name: "phone",
    label: "phone number",
    type: "tel",
  },
  displayName: {
    name: "display_name",
    label: "chat name",
    type: "text",
  },
  message: {
    name: "message",
    type: "text",
  },
};
