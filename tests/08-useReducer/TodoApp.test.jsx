const { render,screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer");
const { useTodos } = require("../../src/hooks/useTodos");

jest.mock('../../src/hooks/useTodos');

describe('Prueba en componente TodoApp', () => {
    useTodos.mockReturnValue({
        todos: [{id: 1, descripcion: 'todo 1', hecho: false},
        {id: 2, descripcion: 'todo 2', hecho: true}],
        returnNewTodo: jest.fn(),
        removeTodoById: jest.fn(),
        completTodo: jest.fn(),
        todosCount: 2,
        todosPendingCount: 1,
    })

    test('Debe de mostrar el componente correctamente', () => {
        
        render(<TodoApp />);
        //screen.debug();
        expect( screen.getByText('todo 1')).toBeTruthy();
    });

});