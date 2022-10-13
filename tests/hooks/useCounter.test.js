import { act,renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas con mi useCounter', () => {
    test('Debe de retorna valores por defecto', () => { 
      const { result } = renderHook( () => useCounter() );
      const { Counter, aumentar,restar,reset } = result.current;
      //console.log( Counter );
      expect( Counter ).toBe(0);
      expect( aumentar ).toEqual( expect.any( Function ) );
      expect( restar ).toEqual( expect.any( Function ) );
      expect( reset ).toEqual( expect.any( Function ) );
     });

     test('Se debe de generar el counter con el valor de 50', () => { 

        const { result } = renderHook( () => useCounter(50));
        const {Counter } = result.current;
        expect( Counter ).toBe( 50 );
      });

      test('Debe de incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(0));
        const { aumentar } = result.current;
        act( () => {
            aumentar();
            aumentar(2);
        })
        expect( result.current.Counter ).toBe(3);
       });
       test('Debe de decrementar el valor del contador', () => { 
        const { result } = renderHook( () => useCounter(100));
        const { restar } = result.current;
        act( () => {
            restar();
        })
        //expect( result.current.Counter ).toBe(9);
       });
       test('Debe de establecer el valor inicial del contador', () => { 
        const { result } = renderHook( () => useCounter(100));
        const { aumentar,reset,restar } = result.current;
        act( () => {
            aumentar();
            reset();
        })
        expect( result.current.Counter ).toBe(100);
       });

});