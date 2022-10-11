import { useState } from "react"
import { UserContex } from "./userContex"

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    <UserContex.Provider
        value={{ user,setUser}}
    >
        { children }
    </UserContex.Provider>
  )
}
