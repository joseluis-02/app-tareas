import { useRef } from "react"

export const FocusScreen = () => {

   const refInput = useRef();
   const onEstableceFoco = () => {
      //document.querySelector('input').select();
      refInput.current.select();
   }

  return (
    <>
        <h1>Focus screen</h1>
        <hr />
        <input 
            ref={ refInput }
            type="text"
            placeholder=" ingrese su nombre"
            className="form-control"
         />
         <button
            className="mt-2 btn btn-info"
            onClick={ onEstableceFoco }
         >
            Establecer foco
         </button>
    </>

  )
}
