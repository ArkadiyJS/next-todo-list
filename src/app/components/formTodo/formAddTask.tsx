"use client"

import React, {  useState } from 'react';
import uuid4 from "uuid4";

function FormAddTask({tasks,setTasks}) {

  const [taskValue,setTaskValue] = useState(``)

  

  const handleSubmit = (event:any) =>{
    event.preventDefault()

    if (!!taskValue){

      const newTask ={
        id: uuid4(),
        title: taskValue,
        completed: false
      }
      setTasks(...tasks,{newTask})
      console.log(...tasks,{newTask})

      console.log(tasks)
      setTaskValue(``)
    }

  }

  return (
    <form  onSubmit={handleSubmit} >

        <input 
          value={taskValue}
          onChange={event=>setTaskValue(event.target.value)}
          type="text"
          placeholder="Название задачи" />
        
        <button type='submit' disabled={taskValue === ``}> Добавить задачу</button>

        {taskValue}
    </form>
  );
}

export default FormAddTask;