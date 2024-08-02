"use client"

import { useState } from "react";

import FormAddTask from "./components/formTodo/formAddTask";
import TasksTodo from "./components/tasksTodo/tasksTodo";

export default function Home() {








  return (
    <div>
      <h1> TODO LIST</h1>

      
        
      <FormAddTask   />
      <TasksTodo  />


    </div>
  );
}
