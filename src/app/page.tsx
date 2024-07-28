"use client"


import FormAddTask from "./components/formTodo/formAddTask";
import { useState } from "react";
import TasksTodo from "./components/tasksTodo/tasksTodo";

export default function Home() {



const [tasks,setTasks] = useState([{id:`123`,title:`ssss`,completed:false}])




  return (
    <div>
      <h1> TODO LIST</h1>

      
        
      <FormAddTask  tasks={tasks} setTasks={setTasks} />
      <TasksTodo tasks={tasks} />


    </div>
  );
}
