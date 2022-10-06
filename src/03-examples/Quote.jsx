import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({quote, author}) => {

  const quoteRef = useRef();
  const [cajaQuote, setCajaQuote] = useState({
      width:0, 
      height:0
  });

  useLayoutEffect(() => {
    
    //console.log( quoteRef.current.getBoundingClientRect() );
    const { width, height } = quoteRef.current.getBoundingClientRect();
    setCajaQuote({
      width,
      height
    });

  }, [quote]);

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p 
            ref={ quoteRef }
            className="mb-1"
          > { quote }</p>
          <footer className="blockquote-footer mt-1">
              { author }
          </footer>
      </blockquote>
      
      <code>{ JSON.stringify(cajaQuote)}</code>
      <hr />
    </>
    
  )
}
