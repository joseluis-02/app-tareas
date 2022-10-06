import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
   
    const { Formulario, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })
    
    const { username, email, password } = Formulario;

  return (
    <>
        <h2>Formulario con mi hook</h2>
        <input 
            className="form-control"
            name="username" 
            type="text"
            placeholder="UserName"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            className="form-control mt-2"
            name="email" 
            type="email"
            placeholder="user@gmail.com"
            value={ email }
            onChange={ onInputChange }
        />
        <input 
            className="form-control mt-2"
            name="password" 
            type="password"
            placeholder="contraseña"
            value={ password }
            onChange={ onInputChange }
        />
        <button onClick={ onResetForm } className="btn btn-info mt-2">
            Limpiar formulario
        </button>
    </>
  )
}
