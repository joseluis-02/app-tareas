import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [Formulario, setFormulario] = useState({
        username: 'nombre usuario',
        email: 'user@gmail.com'
    });

    const { username, email } = Formulario;

    const onInputChange = ( { target }) => {
        const { name, value } = target;
        //console.log( name );
        setFormulario({
            ...Formulario,
            [name ]: value
        })
    }


    useEffect( () => { 
        //console.log('Se rendirizó');
     },[]
    );
    useEffect( () => { 
        //console.log('Formulario cambió');
     },[ Formulario ]
    );
    useEffect( () => { 
        //console.log('email cambió');
     },[ email ]
    );


  return (
    <>
        <h2>Formulario simple</h2>
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
        {
            ( username === 'jose luis') && <Message />
        }
    </>
  )
}
