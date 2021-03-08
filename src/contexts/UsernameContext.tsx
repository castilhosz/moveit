import { createContext, ReactNode, useContext, useEffect, useState, Dispatch, SetStateAction } from "react";
import Cookies from 'js-cookie';

interface UsernameProviderProps {
  children: ReactNode
}

interface UsernameContextData {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>
}

const initialState = {
  username: '',
  setUsername(): void { return }
}

const UsernameContext = createContext(initialState as UsernameContextData)

export function UsernameProvider({ children }: UsernameProviderProps) {
  const [username, setUsername] = useState('')

  useEffect(() => {
    Cookies.set('username', String(username))
    console.log(username)
  }, [username])

  return (
    <UsernameContext.Provider 
    value={{
      username, setUsername
      }}
    >
      { children }
    </UsernameContext.Provider>
  )
} 

export function useUsername() {
  const context = useContext(UsernameContext);
  const { username, setUsername } = context;
  return { username, setUsername };
}