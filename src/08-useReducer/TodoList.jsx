import { TodoItem } from "./TodoItem"

export const TodoList = ( { todos=[], removeTodoById, onToggleTodoById }) => {
  return (
    <>
      <h4><em>Lista de tareas</em></h4>
      <hr />
      <ul className="list-group">
          {
              todos.map( (todo) => (
                  <TodoItem 
                      key={todo.id}
                      todo={ todo }
                      returnIdTodo={(id) => removeTodoById( id ) }
                      onToggleTodo={ onToggleTodoById }
                  />
              ))
          }
      </ul>
    </>
  )
}
