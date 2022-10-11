import { useContext } from "react"
import { UserContex } from "./contex/userContex"

export const LoginPage = () => {


  const { setUser } = useContext( UserContex );

  return (
    <>
        <h1>LoginPage</h1>
        <hr />
        <button
          className="btn btn-info"
          onClick={() => setUser({id:123,nombre:'Jose Luis',email: 'jose@gmail.com'})}
        >
          Establecer usuario
        </button>
    </>
  )
}
