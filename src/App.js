import React, { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./Components/FilterButton";
import Form from "./Components/Form";
import Todo from "./Components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  //функция изменения состояния отметок чекбоксов
  function toggleTaskCompleted(id) {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updateTasks);
  }
  //функция удаления элемента из списка
  function deleteTask(id) {
    const removedTasks = tasks.filter((task) => task.id !== id);
    setTasks(removedTasks);
  }
  //всегда должны передавать уникальный ключ всему, что вы визуализируете с помощью итерации
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));
  //функция-реквизит для добавления задачи в список
  //nanoid генерирует уникальный id
  function addTask(name) {
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const taskHead = `${taskList.length} ${taskNoun} remaining`;
  return (
    <div className="wrapper">
      <h2 className="todo-title">Todo List</h2>
      <h3 className="form-title">What needs to be done?</h3>
      <Form addTask={addTask} />
      <div className="todo-filter">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h3 className="todo-head">{taskHead}</h3>
      <ul className="todo-list">{taskList}</ul>
    </div>
  );
}

export default App;
