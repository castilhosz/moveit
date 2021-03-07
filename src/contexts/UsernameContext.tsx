import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';

interface UsernameProviderProps {
  children: ReactNode
}

interface UsernameContextData {
  username: string;
  setUsername: (user: string) => void;
  handleChange: (e: any) => void;
}

export const UsernameContext = createContext({} as UsernameContextData)

export function UsernameProvider({ children }: UsernameProviderProps) {
  const [username, setUsername] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    try {
      setUsername(e.target.username)
    } catch (error) {
      console.log('acendo puxa prende e solta')
    }
  }

  useEffect(() => {
    Cookies.set('username', String(username))
    console.log(username)
  }, [username])

  return (
    <UsernameContext.Provider value={{username, setUsername, handleChange}}>
      { children }
    </UsernameContext.Provider>
  )
} 