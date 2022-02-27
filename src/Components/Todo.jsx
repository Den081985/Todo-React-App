import React, { useState } from "react";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");
  //функция изменения имени элемента
  function handleChange(e) {
    setNewName(e.target.value);
  }
  //функция отправки формы
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  //шаблоны отображения  редактирования и просмотра
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.id}
        </label>
        <input
          id={props.id}
          type="text"
          value={newName}
          className="todo-text"
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
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
      <button type="button" className="btn" onClick={() => setEditing(true)}>
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button
        className="todo-remove"
        onClick={() => props.deleteTask(props.id)}
      >
        &times;
      </button>
    </div>
  );
  return (
    <li className="todo-item">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}
