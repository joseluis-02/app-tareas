import { useState } from 'react';

export const useForm = ( inicialForm = {} ) => {
    const [Formulario, setFormulario] = useState( inicialForm );
    const onInputChange = ( { target }) => {
        const { name, value } = target;
        setFormulario({
            ...Formulario,
            [name ]: value
        })
    }

    const onResetForm = () => {
        setFormulario(inicialForm );
    }

  return {
    ...Formulario,
    Formulario,
    onInputChange,
    onResetForm
  }
}
