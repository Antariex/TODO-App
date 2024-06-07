import React from "react";
import "./styles/App.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";

const defaultTodos = [
  { text: "Yoga with Sofie", completed: true, important: false },
  { text: "Water plants", completed: true, important: false },
  { text: "Package Delivery", completed: false, important: false },
  { text: "Duct Tape", completed: false, important: false },
  { text: "Plan the trip for holidays", completed: true, important: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const toggleCompleteTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const toggleImportantTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, important: !todo.important };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>🏠 Home</h1>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            important={todo.important}
            toggleCompleteTodo={toggleCompleteTodo}
            toggleImportantTodo={toggleImportantTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
}

export default App;
