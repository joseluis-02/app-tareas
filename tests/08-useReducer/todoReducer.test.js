import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Puebas en mi useReducer', () => {
    
    const inicialState = [{
        id: 1,
        descripcion: 'hola mundo',
        hecho: false
    }]

    test('Debe de regresar el estado inicial', () => {
        
        const newState = todoReducer(inicialState,{});
        expect( newState ).toBe( inicialState );

    });

    test('Debe de agregar un todo', () => {
        

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                descripcion: 'Comer comida',
                hecho: false
            }
        };

        const newState = todoReducer(inicialState,action);
        expect( newState.length ).toBe(2);
        expect( newState ).toContain( action.payload );
        //console.log(newState);

    });

    test('Debe de eliminar un state', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(inicialState,action);
        expect( newState.length ).toBe(0);
        
    });

    test('Debe de realizar hecho del todo', () => {
        

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(inicialState,action);
        expect( newState.length ).toBe(1);
        expect( newState[0].hecho ).toBeTruthy();

    });

});