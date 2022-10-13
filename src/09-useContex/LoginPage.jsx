import { useContext } from "react"
import { UserContex } from "./contex/userContex"

export const LoginPage = () => {


  const { user,setUser } = useContext( UserContex );

  return (
    <>
        <h1 aria-label="titulo">{ user ? user.nombre : 'no hay usuario' }</h1>
        <hr />
        <button
          className="btn btn-info"
          onClick={() => setUser({id:123,nombre:'Jose Luis',email: 'jose@gmail.com'})}
          aria-label="buttonSet"
        >
          Establecer usuario
        </button>
    </>
  )
}
