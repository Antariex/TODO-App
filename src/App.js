import React from "react";
import "./styles/App.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";

const defaultTodos = [
  { text: "Yoga with Sofie", completed: true },
  { text: "Water plants", completed: true },
  { text: "Package Delivery", completed: false },
  { text: "Duct Tape", completed: false },
  { text: "Plan the trip for hollidays", completed: true },
];
function App() {
  const [todos, setTodos] =
  React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed === true).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] =
  React.useState("");

  console.log('The users search for ' + searchValue);

  return (
    <>
      <h1>🏠 Home</h1>
      <TodoCounter completed={completedTodos} total={totalTodos}  />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    </>
  );
}

export default App;
