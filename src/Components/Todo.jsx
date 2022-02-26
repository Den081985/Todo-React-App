import React from "react";

export default function Todo(props) {
  return (
    <li className="todo-item">
      <span className="todo-span">
        <input
          id={props.id}
          type="checkbox"
          className="todo-input"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        {props.name}
      </span>
      <button
        className="todo-remove"
        onClick={() => props.deleteTask(props.id)}
      >
        &times;
      </button>
    </li>
  );
}
