import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en mi componente <MultipleCustomHooks />', () => { 

    const mockAumentar = jest.fn();

    useCounter.mockReturnValue({
        Counter: 1,
        aumentar: mockAumentar
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el estado inicial del componente', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            errro: null
        });

        render(<MultipleCustomHooks />);
        //screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText('Siguiente quote') );
        const nexButton = screen.getByRole( 'button', { name: 'Siguiente quote'});
        expect( nexButton.disabled ).toBeTruthy();
     });

     test('Debe de mostrar un quote', () => {
        
        useFetch.mockReturnValue({
            data: [{ author: 'Jose Luis', quote: 'Hola mundo'}],
            isLoading: false,
            errro: null
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Jose Luis') ).toBeTruthy();
        expect( screen.getByText('Hola mundo') ).toBeTruthy();
        const nexButton = screen.getByRole( 'button', { name: 'Siguiente quote'});
        expect( nexButton.disabled ).toBeFalsy();
     });

     test('Debe de llamar la funcion de incrementar', () => {
        
        useFetch.mockReturnValue({
            data: [{ author: 'Jose Luis', quote: 'Hola mundo'}],
            isLoading: false,
            errro: null
        });
        
        render(<MultipleCustomHooks />);

        const nexButton = screen.getByRole( 'button', { name: 'Siguiente quote'});

        fireEvent.click( nexButton ); 

        expect( mockAumentar ).toHaveBeenCalled();

     });
 })