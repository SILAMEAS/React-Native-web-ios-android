export type UserAction =
  | {
      type: 'RESTORE_TOKEN' | 'SIGN_IN';
      token: string;
    }
  | {type: 'SIGN_OUT'};

export interface UserState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
}

export type IData = {
  email: string;
};

export interface SignInData extends IData {
  password: string;
  userToken?: string | null;
}
export interface SignUpData extends IData {}

export type IContext = {
  signIn: (_data: SignInData) => Promise<void>;
  signOut: () => void;
  signUp: (_data: SignUpData) => Promise<void>;
};
