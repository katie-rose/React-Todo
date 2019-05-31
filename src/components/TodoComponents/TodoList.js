import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log(props);
  return (
    <div className="todo-list">
      {props.todos.map(task => {
        return (
          <Todo task={task}
            key={task.id}
            toggleTask={props.toggleTask}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
