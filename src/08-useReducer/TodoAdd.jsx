
import { useForm } from "../hooks/useForm";

export const TodoAdd = ( { onNewTodo } ) => {
   const { descripcion, onInputChange, onResetForm} = useForm({
        descripcion: ''
   });

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(descripcion.trim().length <= 1 ) return;
        const newTodo = {
            id: new Date().getTime() * 3,
            descripcion,
            hecho: false
        };
        onNewTodo( newTodo );
        onResetForm();
    }
  return (
    <form onSubmit={ onSubmitForm }>
        <input 
            type="text"
            className="form-control"
            placeholder="¿Que hay por hacer?"
            name="descripcion"
            value={ descripcion }
            onChange={ onInputChange }

        />
        <button
            type="submit"
            className="btn btn-info mt-2"
            onClick={ onSubmitForm }
        >
            Guardar tarea
        </button>
    </form>
  )
}
