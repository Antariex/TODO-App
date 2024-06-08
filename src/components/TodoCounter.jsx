import "../styles/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h4>
      You have completed <span className="completed">{completed === total ? 'ALL' : completed}</span> of{" "}
      <span>{total}</span> tasks
    </h4>
  );
}

export { TodoCounter };
