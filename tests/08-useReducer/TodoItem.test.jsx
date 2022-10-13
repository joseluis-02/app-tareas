const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe('Pruebas en el componente TodoItem', () => { 
   

    const todo = {
        id:1,
        descripcion: 'La piedra del alma',
        hecho: false
    }

    const onToggleTodo = jest.fn();
    const onDeleteTodo = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Debe de mostrar el todo pendiente de completar', () => {
        
        render( <TodoItem
                todo = { todo }
                returnIdTodo = { onDeleteTodo }
                onToggleTodo = { onToggleTodo }
            />);
        
        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('spam');
        expect( spanElement.className ).toContain('align-self-center');
        //console.log( spanElement.className);

    });

    test('Debe de mostrar el todo completado', () => {
        

        todo.hecho = true;
        render( <TodoItem
            todo = { todo }
            returnIdTodo = { onDeleteTodo }
            onToggleTodo = { onToggleTodo }
        />);

        const spanElement = screen.getByLabelText('spam');
        expect( spanElement.className ).toBe('align-self-center text-decoration-line-through');

        //screen.debug();
    });

    test('Span debe llamar la funcion onToggleTodo para complrtar la tarea', () => {
        

        render( <TodoItem
            todo = { todo }
            returnIdTodo = { onDeleteTodo }
            onToggleTodo = { onToggleTodo }
        />);
        const spanElement = screen.getByLabelText('spam');
        fireEvent.click( spanElement );
        expect( onToggleTodo ).toHaveBeenCalledWith( todo.id );

    });

    test('El boton debe llamar al onDeleteTodo ', () => {
        
        render( <TodoItem
            todo = { todo }
            returnIdTodo = { onDeleteTodo }
            onToggleTodo = { onToggleTodo }
        />);

        const buttonDelete = screen.getByLabelText('buttonDelete');
        fireEvent.click( buttonDelete );
        expect( onDeleteTodo ).toHaveBeenCalledWith( todo.id );

    });

    

 })