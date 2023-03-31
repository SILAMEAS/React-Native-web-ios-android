import {SignInData, UserAction, UserState} from './type';
import React from 'react';

export const AuthContextP = () => {
  const useReducer = (prevState: UserState, action: UserAction) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
    }
  };

  const [state, dispatch] = React.useReducer(useReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  const authContext = React.useMemo(
    () => ({
      signIn: async (_data: SignInData) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        dispatch({type: 'SIGN_IN', token: _data.userToken!});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (_data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return {state, dispatch, useReducer, authContext};
};
