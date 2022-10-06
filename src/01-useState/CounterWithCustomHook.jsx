import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { Counter, aumentar, restar, reset } = useCounter();

  return (
    <>
        <h2>CounterWithCustomHook: { Counter }</h2>
        <hr />
        <button className="btn btn-primary" onClick={ () => aumentar( 2 ) }>
            +1
        </button>
        <button className="btn btn-info m-2" onClick={ reset }>
            Reset
        </button>
        <button className="btn btn-success m-2" onClick={ () => restar( 2 ) }>
            -1
        </button>
    </>
  )
}
