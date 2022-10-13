import { render, screen, fireEvent } from "@testing-library/react";
import { UserContex } from "../../src/09-useContex/contex/userContex";
import { LoginPage } from "../../src/09-useContex/LoginPage";

describe('Prueba en mi componente LoginPage', () => { 
    
    const user = {id:123,nombre:'Jose Luis',email: 'jose@gmail.com'};
    const setUser = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente sin el usuario', () => { 

        render(
            <UserContex.Provider value={{user: null}}>
                <LoginPage />
            </UserContex.Provider>
        );

        //screen.debug();
        const tituloUser = screen.getByLabelText('titulo');
        expect( tituloUser.innerHTML).toBe('no hay usuario');
     });

     test('Debe de llamar a la funcion setUser cuando haga click en el boton establecer usuario', () => { 

        render(
            <UserContex.Provider value={{user: null, setUser: setUser}}>
                <LoginPage />
            </UserContex.Provider>
        );

        const buttonSetUser = screen.getByLabelText('buttonSet');
        fireEvent.click( buttonSetUser );
        //expect( setUser ).toHaveBeenCalled();
        expect( setUser ).toHaveBeenCalledWith( user );
      });

 });