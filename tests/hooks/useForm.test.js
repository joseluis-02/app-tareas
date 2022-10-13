import { act,renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en mi useForm ', () => {
    const inicialForm = {
        name: 'Jose Luis',
        email: 'jose@gmail.com'
    }
    test('Dede de retornar valores por defecto', () => { 
        const { result } = renderHook( () => useForm( inicialForm ) );
        expect( result.current ).toEqual({
            name: 'Jose Luis',
            email: 'jose@gmail.com',
            Formulario: inicialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
          })
     });
     test('Dede de cambiar el nombre del formulario', () => {
        const valor = 'nuevoValor';
        const { result } = renderHook( () => useForm( inicialForm ) );
        const { onInputChange } = result.current;
        act(() => {
            onInputChange( { target: { name: 'name', value: valor}} );
        })
        expect( result.current.name ).toBe( valor );
        expect( result.current.Formulario.name ).toBe( valor );
     });

     test('Dede de limpiar el formulario', () => {
        const valor = 'nuevoValor';
        const { result } = renderHook( () => useForm( inicialForm ) );
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange( { target: { name: 'name', value: valor}} );
            onResetForm();
        })
        expect( result.current.name ).toBe( inicialForm.name );
        expect( result.current.Formulario.name ).toBe( inicialForm.name );
     });
});