import { useState } from "react";
import "./styles/TodoItem.css";

function TodoItem(props) {
  const [isSelected, setIsSelected] = useState(props.completed);
  const [isStarred, setIsStarred] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
  };

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  return (
    <li className="todoitem">
      <input
        type="checkbox"
        className={`checkbox ${isSelected ? "check-active" : ""}`}
        name="todo"
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
      <p className={`TodoItem-p ${isSelected ? "TodoItem-p--complete" : ""}`}>
        {props.text}
      </p>
      <span
        className={`star ${isStarred ? "star-active" : ""}`}
        onClick={handleStarClick}
      >
        &#9733;
      </span>
    </li>
  );
}

export { TodoItem };
