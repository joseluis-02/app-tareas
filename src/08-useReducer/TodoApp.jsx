
import { useTodos } from '../hooks';
import { TodoAdd, TodoList } from './';

export const TodoApp = () => {

    const {todos,todosCount,todosPendingCount, returnNewTodo,removeTodoById,completTodo} = useTodos();

  return (
    <>
        <div className="shadow p-3 mt-2 bg-body rounded">
            Mis Tareas: <span className="badge text-bg-light">{ todosCount }</span> <br />
            Pedientes: <span className="badge text-bg-light">{ todosPendingCount }</span> <br />
        </div>
        <div className="row">
            <div className="col-sm-5 mt-3">
                <TodoAdd
                    onNewTodo={ (newTodo) => returnNewTodo(newTodo) }
                />
            </div>
            <div className="col-sm-7 mt-3">
                {
                    (todos.length===0)
                    ?(
                        <div className="alert alert-light" role="alert">
                            No hay tareas
                        </div>
                    )
                    :(
                        <TodoList 
                            todos={ todos }
                            removeTodoById={(id) => removeTodoById( id ) }
                            onToggleTodoById={ completTodo }
                        />
                    )
                }
            </div>
        </div>
       
    </>
  )
}
