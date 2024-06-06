import "./styles/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button className="createbutton" onClick={
      (event) =>
        console.log('You added a new task!',
        console.log(event)
      )
      }>
      <span className="add">+</span> Add a task
    </button>
  );
}

export { CreateTodoButton };
