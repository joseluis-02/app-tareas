import { useState } from "react"

export const useCounter = ( valorInicial = 0 ) => {

    const [Counter, setCounter] = useState( valorInicial );

    const aumentar = ( valor = 1 ) => {
        setCounter( ( current ) => current + valor );
    }
    const restar = ( valor = 1 ) => {
        if ( Counter === valorInicial) return;
        setCounter( (current) => current - valor );
    }

    const reset = () => {
        setCounter( valorInicial );
    }
    return{
        Counter,
        aumentar,
        restar,
        reset,
    }
}