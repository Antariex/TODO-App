import "./styles/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button className="createbutton" onClick={
      (event) => (
      "")
      }>
      <span className="add">+</span> Add a task
    </button>
  );
}

export { CreateTodoButton };
