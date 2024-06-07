import "./styles/TodoItem.css";

function TodoItem(props) {
  const {
    text,
    completed,
    important,
    toggleCompleteTodo,
    toggleImportantTodo,
  } = props;

  const handleCheckboxChange = () => {
    toggleCompleteTodo(text);
  };

  const handleStarClick = (event) => {
    event.stopPropagation();
    toggleImportantTodo(text);
  };

  return (
    <li className="todoitem">
      <input
        type="checkbox"
        className={`checkbox ${completed ? "check-active" : ""}`}
        name="todo"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <p className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""}`}>
        {text}
      </p>
      <span
        className={`star ${important ? "star-active" : ""}`}
        onClick={handleStarClick}
      >
        &#9733;
      </span>
    </li>
  );
}

export { TodoItem };
