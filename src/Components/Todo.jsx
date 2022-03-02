import React, { useState, useRef, useEffect } from "react";

//пользовательский хук для получения предыдущего состояния компонента.Возвращает boolean(true/false)
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current; //true/false
}

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");
  //ссылки на поле редактирования и кнопку редактирования
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  //константа, хранящая предыдущее состояние компонента
  const wasEditing = usePrevious(isEditing);

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
          New name for {props.name}
        </label>
        <input
          id={props.id}
          type="text"
          value={newName}
          className="todo-text"
          onChange={handleChange}
          ref={editFieldRef}
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
    <div className="stack-large">
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
        type="button"
        ref={editButtonRef}
        className="edit-btn"
        onClick={() => setEditing(true)}
      >
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
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    } else if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <li className="todo-item">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}
