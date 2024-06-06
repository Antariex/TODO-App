function TodoCounter(props) {
  return (
    <h1>
      You complete {props.completed} of {props.total} tasks
    </h1>
  );
}

export { TodoCounter };
