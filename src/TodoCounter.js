import "./styles/TodoCounter.css";

function TodoCounter(props) {
  return (
    <h4>
      You have completed <span className="completed">{props.completed}</span> of{" "}
      <span>{props.total}</span> tasks
    </h4>
  );
}

export { TodoCounter };
