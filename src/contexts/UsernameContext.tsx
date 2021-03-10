import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";
import Cookies from 'js-cookie';

interface UsernameProviderProps {
  children: ReactNode
};

interface UsernameContextData {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>
  user: string;
  usernameOnCookies(): void;
  removeUsername(): void;
  requestApi(): void;
};

const initialState = {
  username: '',
  user: '',
  usernameOnCookies(): void {},
  removeUsername(): void {},
  requestApi(): void {},
  setUsername(): void { return }
};

const UsernameContext = createContext(initialState as UsernameContextData);

export function UsernameProvider({ children }: UsernameProviderProps) {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');

  function usernameOnCookies () {
    Cookies.set('username', String(username));
    Cookies.set('user', String(user));
  };

  function removeUsername () {
    Cookies.remove('username');
    Cookies.remove('user');
  };

  async function requestApi() {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const result = await response.json();

    setUser(result.name);
  };

  return (
    <UsernameContext.Provider 
    value={{
      username, 
      setUsername, 
      usernameOnCookies,
      user, 
      requestApi,
      removeUsername
      }}
    >
      { children }
    </UsernameContext.Provider>
  );
};

export function useUsername() {
  const context = useContext(UsernameContext);
  const { 
    username, 
    setUsername, 
    usernameOnCookies,
    user,
    requestApi,
    removeUsername
  } = context;
  return { username, setUsername, usernameOnCookies, user, requestApi, removeUsername };
};