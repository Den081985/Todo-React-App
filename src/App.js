import React from "react";

function App() {
  return (
    <div className="wrapper">
      <h2 className="todo-title">Todo List</h2>
      <form className="todo-form">
        <h3 className="form-title">What needs to be done?</h3>
        <input type="text" id="todo-input" />
        <button type="submit" className="todo-add">
          Add Todo
        </button>
      </form>
      <ul className="todo-list">
        <li className="todo-item">
          <span className="todo-span">
            <input type="checkbox" className="todo-input" />
            Eat
          </span>
          <button className="todo-remove">&times;</button>
        </li>
        <li className="todo-item">
          <span className="todo-span">
            <input type="checkbox" className="todo-input" />
            Code
          </span>
          <button className="todo-remove">&times;</button>
        </li>
        <li className="todo-item">
          <span className="todo-span">
            <input type="checkbox" className="todo-input" />
            Sleep
          </span>
          <button className="todo-remove">&times;</button>
        </li>
        <li className="todo-item">
          <span className="todo-span">
            <input type="checkbox" className="todo-input" />
            Repeat
          </span>
          <button className="todo-remove">&times;</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
