import React from 'react';

function TaskTodo(props) {
  return (
    <li>
      {props.title}
      {props.complited}
    </li>
  );
}

export default TaskTodo;