"use client"

import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const TodoContext = createContext()


function TodoContextProvider({children}) {


const [task,setTask] = useState([{id:`1234`,title:`first task`, completed:false}])


const addTask = (title:string)=>{

const newTask = { id:uuidv4() , title:title,complited:false}
setTask((task)=>[...task,newTask])
  
}
const removeTask = (id)=>{

  
}
const completedTask = (id)=>{

  
}





  return (
    <TodoContext.Provider value={{task,completedTask,removeTask,addTask}} >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;