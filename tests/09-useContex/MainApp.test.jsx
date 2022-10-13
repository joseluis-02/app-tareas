const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../src/09-useContex/MainApp");

describe('Pruebas en mi componetes MainApp', () => {
 
    test('Debe de mostrar en componentes HomePage', () => { 


        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    
     });

     test('Debe de mostra el LoginPage', () => { 

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        //screen.debug();
        const tituloUser = screen.getByLabelText('titulo');
        expect( tituloUser.innerHTML ).toBe('no hay usuario');

      });


});