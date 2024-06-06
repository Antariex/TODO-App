import './styles/TodoList.css'

function TodoList({ children }) {
  return (
    <ul className='todolist'>
        {children}
    </ul>
  )
}

export { TodoList };
