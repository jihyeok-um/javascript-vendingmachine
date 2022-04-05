import { $ } from './dom';
import { LoginInfo, UserInfo } from '../declarations/resourceDeclaration';

export const getLoginInfo = function () {
  const email = $('#login-form__email-input').value;
  const password = $('#login-form__password-input').value;

  return { email, password };
};

export const getSignUpInfo = function () {
  const email = $('#sign-up-form__email-input').value;
  const name = $('#sign-up-form__name-input').value;
  const password = $('#sign-up-form__password-input').value;
  const passwordConfirm = $('#sign-up-form__password-check-input').value;

  return { email, name, password, passwordConfirm };
};

export const getUserInfo = function () {
  const email = $('#edit-profile-form__email-input').value;
  const name = $('#edit-profile-form__name-input').value;
  const password = $('#edit-profile-form__password-input').value;
  const passwordConfirm = $('#edit-profile-form__password-check-input').value;

  return { email, name, password, passwordConfirm };
};
