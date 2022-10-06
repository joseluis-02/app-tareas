import { useCallback, useEffect, useMemo, useState } from "react"
import { ButtonIncrement } from "./ButtonIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);
     const funcionPadre = useCallback(
                            (valordehijo,{ nombre, edad}) => {
                                setCounter( (c) => c + valordehijo );
                                //console.log( nombre , edad);
                            },
                            [],
                            );
    // useEffect(() => {
    //     funcionPadre();
    // }, [funcionPadre])
    
    // const setCounterFather = () => {
    //     setCounter( counter + 1 );
    // }

  return (
    <>
        <h1>useCallback hook: { counter }</h1>
        <hr />
        <ButtonIncrement 
            increment={ funcionPadre }
        />
    </>
  )
}
