import {createContext,useContext} from 'react'
export const toDoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo mgg",
            completed:false,
        }
    ],
    addToDo:(todo)=>{},
    updatedToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{},
    
})



export  const useToDo=()=>{
    return useContext(toDoContext);
}
export const ToDoProvider= toDoContext.Provider;