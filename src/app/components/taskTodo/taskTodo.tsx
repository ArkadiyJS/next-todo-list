import React from 'react';

function TaskTodo(props) {
  return (
    <li>
      {props.title}
      {props.completed}
    </li>
  );
}

export default TaskTodo;