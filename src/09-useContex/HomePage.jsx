import { useContext } from "react"
import { UserContex } from "./contex/userContex"

export const HomePage = () => {

    const { user } = useContext( UserContex );

  return (
    <>
        <h1>HomePage <small>{user?.nombre}</small></h1>
        <hr />
        <pre>
          { JSON.stringify( user,null,3) }
        </pre>
    </>
  )
}
