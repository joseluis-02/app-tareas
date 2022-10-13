import { render, screen } from "@testing-library/react";
import { UserContex } from "../../src/09-useContex/contex/userContex";
import { HomePage } from "../../src/09-useContex/HomePage";

describe('Pruebas en mi componente HomePage', () => {
    const user = {
        id: 1,
        nombre: 'Jose Luis',
        email: 'jose@gmail.com'
    }

    test('Debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContex.Provider value={{user: null}}>
                <HomePage />
            </UserContex.Provider>
        );
        //screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

     });

     test('Debe de mostrar el usuario', () => { 

        render(
            <UserContex.Provider value={{user: user}}>
                <HomePage />
            </UserContex.Provider>
        );

        //screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(JSON.parse(preTag.innerHTML)).toStrictEqual( user );
      });
});