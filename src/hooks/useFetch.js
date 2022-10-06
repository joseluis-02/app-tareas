import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [State, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });
    const getFetch = async() => {
        setState({
            ...State,
            isLoading: true,
        });
        const resp = await fetch( url );
        const data = await resp.json();
        //console.log( data );
        setState({
            data,
            isLoading: false,
            error: null
        });
    }

    useEffect(() => {
      
        getFetch();
    
    }, [ url ]);
    
  return {
        data: State.data,
        isLoading: State.isLoading,
        error: State.error
  }
}
