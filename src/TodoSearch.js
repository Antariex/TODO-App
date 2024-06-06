import "./styles/TodoSearch.css";

function TodoSearch() {
  return (
    <input
      name="search"
      type="search"
      className="todosearch"
      placeholder="Search a task..."
      onChange={(event) => {
        console.log('You searched a task!')
        console.log(event.target.value)
      }}
    />
  );
}

export { TodoSearch };
