
export const  todoReducer = ( inicialState = [], action ) => {
    //console.log('mi reducer');
    switch (action.type) {
        case 'abc':
            throw new Error('Action.type: abc aun no esta implementada');
            break;
        case '[TODO] Add Todo':
            return [ ...inicialState, action.payload ];
            break;
        case '[TODO] Remove Todo':
            return inicialState.filter(todo => todo.id !== action.payload );
            break;
        case '[TODO] Toggle Todo':
            return inicialState.map( todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        hecho: !todo.hecho,
                    }  
                }
                return todo;
            });
            break;
        default:
            return inicialState;
            break;
    }
}