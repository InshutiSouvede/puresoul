import { createContext, useState } from 'react'

interface UserContext{
    currentUserId:string,
    setCurrentUserId:React.Dispatch<React.SetStateAction<string>>
}
export const UserContext = createContext<UserContext | null>(null)

interface UserContextProviderProps {
  children: React.ReactElement
}

export default function UserContextProvider({ children }: UserContextProviderProps) {
const [currentUserId, setCurrentUserId] = useState('');


return <UserContext.Provider value={{currentUserId,setCurrentUserId}}>{children}</UserContext.Provider>
}

