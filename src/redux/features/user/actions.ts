import {User} from '@src/redux/features/user/user';

export interface LoginForm {
  email: string;
  password: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isSecure: boolean;
  emailMessage?: string | undefined;
  passwordMessage?: string | undefined;
}
export const validate = (userForm: LoginForm): void => {
  if (!userForm.email.includes('@')) {
    userForm.isEmailValid = false;
    userForm.emailMessage = "Valid email must be has '@'.";
  } else {
    userForm.isEmailValid = true;
    userForm.emailMessage = '';
  }
  if (userForm.password.length < 6) {
    userForm.isPasswordValid = false;
    userForm.passwordMessage = 'Must be atleast 6 characters.';
  } else {
    userForm.isPasswordValid = true;
    userForm.passwordMessage = '';
  }
};

export const login = (userForm: LoginForm, user: User): boolean => {
  if (userForm.email != user.email && userForm.password != user.password) {
    userForm.isEmailValid = false;
    userForm.emailMessage =
      'Adresse email et mot de passe non reconnus, merci de vérifier leur exactitude.';
  } else if (userForm.email != user.email) {
    userForm.isEmailValid = false;
    userForm.emailMessage =
      'Adresse email non reconnue, merci de vérifier leur exactitude.';
  } else if (userForm.password != user.password) {
    userForm.isPasswordValid = false;
    userForm.passwordMessage =
      'Mot de passe non reconnu, merci de vérifier leur exactitude.';
  } else {
    return true;
  }
  return false;
};

export default {};
