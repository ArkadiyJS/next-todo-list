
import React, { createContext, useState } from 'react';


export const TodoContext = createContext()


function TodoContextProvider(props) {


const [task,setTask] = useState([{id:`1234`,title:`first task`, completed:false}])




  return (
    <TodoContext.Provider value={{task,setTask}} >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;