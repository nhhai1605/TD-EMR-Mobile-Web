import React from 'react';
import { createContext, useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import authService from '@core/services/authService';
import cookie from 'react-cookies';
interface IAuthContextInterface {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  initialized: boolean;
  login: (username: number, password) => Promise<any>;
  logout: () => Promise<any>;
  auth?: IInitialAuthState;
  isNotSucceed: boolean;
}

const AuthContext = createContext({} as IAuthContextInterface);
export interface IInitialAuthState {
  accessToken?: string;
  tokenType?: string;
  profile?: any;
  pkhid?: string;
}

export const initialAuthState: IInitialAuthState = undefined;

const AuthProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [isNotSucceed, setIsNotSucceed] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [auth, setAuth] = useState(initialAuthState);

  const login = async (username, password) => {
    setIsNotSucceed(false);
    const payload = {
      username,
      password,
      client_id: 'tdemr_mobile_client_id',
      grant_type: 'multi_facility',
    };
    setIsLoggingIn(true);
    const authData = await authService.getToken(payload).catch(() => {
      setIsNotSucceed(true);
      setIsLoggingIn(false);
    });
    if (authData) {
      setAuth(authData);
      setIsAuthenticated(true);
      await authService.getProvider();
      setIsLoggingIn(false);
      return authData;
    }
  };

  const logout = async () => {
    setIsAuthenticated(false);
    authService.signOut();
  };

  const initContext = async () => {
    const authData = cookie.load('AUTH_DATA');

    if (authData) {
      const { exp }: any = jwt_decode(authData.access_token);
      const currentTime = new Date().getTime() / 1000;
      const isExpired = currentTime > exp - 30;
      setAuth(isExpired ? undefined : authData);
      setIsAuthenticated(!isExpired);
    } else {
      setIsAuthenticated(false);
      setAuth(undefined);
    }
    setInitialized(true);
  };

  useEffect(() => {
    (async () => {
      await initContext();
    })();
  }, []);

  const exportedValues: IAuthContextInterface = {
    initialized,
    auth,
    login,
    logout,
    isLoggingIn,
    isAuthenticated,
    isNotSucceed,
  };

  return <AuthContext.Provider value={exportedValues}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
