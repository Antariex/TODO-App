import "./styles/App.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: "Yoga with Sofie", completed: false },
  { text: "Water plants", completed: true },
  { text: "Package Delivery", completed: false },
  { text: "Duct Tape", completed: true },
  { text: "Plan the trip for hollidays", completed: true },
];
function App() {
  return (
    <>
      <h1>🏠 Home</h1>
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
      <TodoSearch />
    </>
  );
}

export default App;
