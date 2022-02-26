import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  //функция отправки формы
  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") {
      e.stopPropagation();
    }
    props.addTask(name);
    setName("");
  }
  //изменение состояния инпута
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" id="todo-input" value={name} onChange={handleChange} />
      <button type="submit" className="todo-add">
        Add Todo
      </button>
    </form>
  );
}

export default Form;
