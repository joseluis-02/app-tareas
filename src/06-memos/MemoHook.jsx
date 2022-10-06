import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const iteracionPesado = ( repeticion=4000 ) => {
    for(let i=0; i < repeticion; i++){
        console.log('Iteracio: ');
    }
    return `${ repeticion } veces repetidos`;
}

export const MemoHook = () => {

    const { Counter, aumentar} = useCounter(4000);
    const [Padre, setPadre] = useState(true);
    const contadorMemorizado = useMemo(() => iteracionPesado( Counter ), [Counter]);

  return (
    <>
        <h1>Contador: <small>{ Counter }</small> </h1>
        <hr />
        <h3> { contadorMemorizado } </h3>
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
