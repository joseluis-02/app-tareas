
import { useCounter,useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
    const {Counter, aumentar, restar, reset} = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${Counter}`;
    const { data,isLoading, error } = useFetch( url );
    const { author, quote } = !!data && data[0];
  return (
    <>
        <h2>Multiples custom hooks</h2>
        <hr />
        {
            ( isLoading )
                ? (
                    <LoadingQuote />
                )
                : (
                    <Quote
                        quote={ quote }
                        author={ author }
                    />
                )
        }
        <button 
            onClick={ () => aumentar(1) }
            className="btn btn-info m-2">
            Siguiente quote
        </button>
        <button 
            onClick={ () => restar(1) }
            className="btn btn-success">
            Anterior quote
        </button>
    </>
  )
}
