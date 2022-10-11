import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

export const useTodos = () => {
    const [ todos, dispatchTodos ] = useReducer(todoReducer, [],init);

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos) );
    }, [todos]);

    const returnNewTodo = ( newTodo ) => {
        const addActionTodo = {
            type: '[TODO] Add Todo',
            payload: newTodo,
        }
        
        dispatchTodos(addActionTodo);
    }
    const removeTodoById = (id) => {
        const removeActionTodo = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatchTodos(removeActionTodo);
    }
    const completTodo = (id) => {
        const toggleActionTodo = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatchTodos(toggleActionTodo);
    }
    return{
        todos,
        returnNewTodo,
        removeTodoById,
        completTodo,
        todosCount: todos.length,
        todosPendingCount: todos.filter( todo => !todo.hecho).length,
    }
}


    
    
    
    