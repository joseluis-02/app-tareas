import { memo } from 'react';

export const ButtonIncrement = memo(({ increment }) => {
    console.log('Hizo clicks');
    const persona = {
        nombre: 'jose luis',
        edad: 22
    }
  return (
    <button
    className="btn btn-info"
    onClick={ () => increment(5, persona) }
    >
        Incrementar
    </button>
  )
})
