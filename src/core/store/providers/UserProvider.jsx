import { USER_COOKIE_NAME, USER_COOKIE_OPTIONS } from '@src/constants/COOKIE';
import React, { useContext, useEffect, useMemo, useReducer } from 'react';
import Cookies from 'universal-cookie';
import { PROVIDER_CONST } from '../constants';
import { UserStateContext } from '../contexts';
import { userReducer } from '../reducers/userReducer';
import { userInitialState } from '../states';

export function UserProvider({ children }) {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const cookies = new Cookies();
  const user = cookies.get(USER_COOKIE_NAME);

  const isUser = useMemo(() => {
    return !!user;
  }, [user]);

  useEffect(() => {
    initializedUser();
  }, []);

  const initializedUser = () => {
    if (user) {
      addUser(user);
    }
  };

  const addUser = (payload) => {
    userDispatch({ type: PROVIDER_CONST.USER.ADD, payload });
    cookies.set(USER_COOKIE_NAME, payload, USER_COOKIE_OPTIONS);
  };

  const initUser = () => {
    userDispatch({ type: PROVIDER_CONST.USER.INIT });
    cookies.remove(USER_COOKIE_NAME, USER_COOKIE_OPTIONS);
  };

  return (
    <UserStateContext.Provider
      value={{ userState, userDispatch, addUser, initUser, isUser }}
    >
      {children}
    </UserStateContext.Provider>
  );
}

export const useUser = () => {
  const { userState, addUser, initUser, isUser } = useContext(UserStateContext);

  return { userState, addUser, initUser, isUser };
};
