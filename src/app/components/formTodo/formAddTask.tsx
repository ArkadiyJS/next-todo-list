"use client"

import React, {  useState } from 'react';


function FormAddTask() {

  const [taskValue,setTaskValue] = useState(``)

  

  const handleSubmit = (event:any) =>{
    event.preventDefault()


      console.log(`handle work`)
      setTaskValue(``)
    

  }

  return (
    <form  onSubmit={handleSubmit} >

        <input 
          value={taskValue}
          onChange={(event)=>setTaskValue(event.target.value)}
          type="text"
          placeholder="Название задачи" />
        
        <button type='submit' disabled={taskValue === ``}> Добавить задачу</button>

       
    </form>
  );
}

export default FormAddTask;