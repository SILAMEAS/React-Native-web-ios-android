import React, {PropsWithChildren} from 'react';
import {AuthContextP} from './authContext';
import {IContext} from './type';

export const AuthContext = React.createContext<IContext | null>(null);

type Props = {} & PropsWithChildren;
const AuthProvider = ({children}: Props) => {
  const {authContext} = AuthContextP();
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
