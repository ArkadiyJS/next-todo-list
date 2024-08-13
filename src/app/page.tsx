"use client"

import { useContext, useState } from "react";

import FormAddTask from "./components/formTodo/formAddTask";
import TasksTodo from "./components/tasksTodo/tasksTodo";
import TodoContextProvider, { TodoContext } from "./contexts/todos";

export default function Home() {


  const {todo,addTask,removeTask,completedTask} = useContext(TodoContext)





  return (
    <TodoContextProvider>
      <h1> TODO LIST</h1>

      
        
      <FormAddTask   />
      <TasksTodo  />


    </TodoContextProvider>
  );
}
