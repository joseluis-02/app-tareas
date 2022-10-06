import { useState } from "react"

export const useCounter = ( valorInicial = 0 ) => {

    const [Counter, setCounter] = useState( valorInicial );

    const aumentar = ( valor = 1 ) => {
        setCounter( Counter + valor );
    }
    const restar = ( valor = 1 ) => {
        if ( Counter === valorInicial) return;
        setCounter( Counter - valor );
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