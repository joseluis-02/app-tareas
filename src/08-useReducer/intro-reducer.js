//console.log('intro reducer');
const inicialState = [{
    id: 1,
    todo: 'mi tarea',
    dono: false,
}];

const tareaReducer = ( state = inicialState, action ) => {

    if( action.type === 'add todo' )
    {
        return [ ...state, action.payload ]
    }
    return state;
}

let tareas = tareaReducer( inicialState, {});
const newTarea = {
    id: 2,
    todo: 'segunda tarea',
    done: false,
}

const addTodoAction = {
    type: 'add todo',
    payload: newTarea,
}
tareas = tareaReducer( inicialState, addTodoAction )
console.log( tareas );