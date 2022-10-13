
export const TodoItem = ({todo, returnIdTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${ todo.hecho ? 'text-decoration-line-through' : ''}`}
          onClick={ () => onToggleTodo(todo.id) }
          aria-label="spam"
        >
          { todo.descripcion }
        </span>
        <button 
          className="btn btn-sm btn-danger"
          onClick={ () => returnIdTodo( todo.id )}
          aria-label="buttonDelete"
        >
            Borrar
        </button>
    </li>
  )
}
