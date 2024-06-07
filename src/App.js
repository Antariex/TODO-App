import React from "react";
import "./styles/App.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const newTodos = Array.from(todos);
    const [movedTodo] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, movedTodo);

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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <TodoList innerRef={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.text}
                  draggableId={todo.text}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onTouchStart={(e) => {
                        const touchTimeout = setTimeout(() => {
                          provided.dragHandleProps.onMouseDown(e);
                        }, 500);
                        e.target.addEventListener(
                          "touchend",
                          () => {
                            clearTimeout(touchTimeout);
                          },
                          { once: true }
                        );
                      }}
                    >
                      <TodoItem
                        text={todo.text}
                        completed={todo.completed}
                        important={todo.important}
                        toggleCompleteTodo={toggleCompleteTodo}
                        toggleImportantTodo={toggleImportantTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </TodoList>
          )}
        </Droppable>
      </DragDropContext>
      <CreateTodoButton />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
}

export default App;
