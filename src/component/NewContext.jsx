import { createContext } from "react";
import { useState } from "react";

export let NewContext = createContext();

export function Add({children}){

      let [taskList,setTasklist]= useState([
        {id:1,task:"کتاب خواندن", check:true   ,edit:false},
        {id:2,task:"انجام تکالیف", check:false ,edit:false},
        {id:3,task:"تمرین ری اکت", check:true  ,edit:false}
      ]);
    
    
      function submitHandler(inputVal){
        if(inputVal != "")
        setTasklist([...taskList,{id:Date.now(),task:inputVal, check:true}])
      }
    
      function deleteHandler(itemId){
          
        setTasklist(taskList.filter((item)=>{return itemId !== item.id}))
        
      }
    
      function editHandler(itemId){
        setTasklist(taskList.map(
          (i)=>{
            return i.id == itemId?{...i , edit:true}:i;
          }
        ))
      }
    
      function changeHandler(itemId, newVal){
        setTasklist(taskList.map((i) =>
            i.id === itemId ? { ...i, task: newVal } : i
        ));
      }
    
      function keyDownHandler(itemId){
        setTasklist(taskList.map((i) =>{
          return i.id == itemId? {...i,edit:false}:i;
        }));
      }

      return(
        <NewContext.Provider value={{taskList,submitHandler,deleteHandler,editHandler,changeHandler,keyDownHandler}}>
            {children}
        </NewContext.Provider>
      )
}