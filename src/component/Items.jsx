import { useContext, useState } from "react"
import { NewContext } from "./NewContext";

export default function Items(){

    let {taskList,deleteHandler,editHandler,changeHandler,keyDownHandler} = useContext(NewContext)

    return(   
        <div>
            {taskList.map(
                (item)=>{
                    return(
                        <li key={item.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                            <div className="flex items-center justify-between min-w-22 mr-10">
                                <button onClick={()=>{deleteHandler(item.id)}} className="text-red-400 hover:text-red-600 hover:font-bold text-sm ">حذف</button>
                                <button onClick={()=>{editHandler(item.id)}} className="text-indigo-600 hover:text-indigo-700 hover:font-bold text-sm">ویرایش</button>
                            </div>
                            {item.edit
                            ?<input type="text" value={item.task} onChange={(e)=>{changeHandler(item.id, e.target.value)}} onKeyDown={(e)=>{if (e.key == "Enter") keyDownHandler(item.id)}} 
                            className="flex-1 border border-gray-300 rounded-lg  py-1 px-1 text-right focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                            :<span className="text-right break-words min-w-0 flex-1">{item.task}</span>}
                        </li>
                    )
            
                }
            )}
        </div>
    )    
} 
