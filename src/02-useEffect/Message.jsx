import { useEffect, useState } from "react"

export const Message = () => {


    const [Coodenadas, setCoodenadas] = useState({
        x:0,
        y:0
    })

    useEffect(() => {
      //console.log(' Componente Montado');
      const mouseMoveEnvent = ({ x, y}) => {
        //console.log(x, y );
        setCoodenadas({
            x:x,
            y:y
        })
      }
      window.addEventListener('mousemove', mouseMoveEnvent );
      return () => {
        //console.log('Componente Desmontado');
        window.removeEventListener('mousemove', mouseMoveEnvent );
      }
    }, []);
    

  return (
    <>
        <h3> Usuario ya existe</h3>
        { JSON.stringify( Coodenadas )}
    </>
  )
}
