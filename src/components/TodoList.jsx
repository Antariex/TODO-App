import '../styles/TodoList.css'

import React from "react";

function TodoList(props) {
  return (
    <ul ref={props.innerRef} {...props.droppableProps}>
      {props.children}
    </ul>
  );
}

export { TodoList };
