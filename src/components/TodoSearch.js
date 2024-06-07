import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
  
  return (
    <input
      name="search"
      type="search"
      className="todosearch"
      value={searchValue}
      placeholder="Search a task..."
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  );
}

export { TodoSearch };
