import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {

    const { Counter, aumentar} = useCounter(0);
    const [Padre, setPadre] = useState(true);

  return (
    <>
        <h1>Contador: <Small valor={ Counter } /> </h1>
        <hr />
        <button
            className=" btn btn-info mt-2"
            onClick={ () => aumentar() }
        >
            Incrementar
        </button>
        <button 
            className="btn btn-outline-success m-2"
            onClick={ () => setPadre( !Padre )}
        >
            mostrar/ocultar { JSON.stringify( Padre )}
        </button>
    </>
  )
}
