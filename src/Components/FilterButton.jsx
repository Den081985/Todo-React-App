import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="todo-btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show</span>
      <span>All</span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default FilterButton;
