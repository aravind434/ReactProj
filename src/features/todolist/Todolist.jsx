import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todolistSlice";

function Todolist(){
    var {todo} = useSelector(state=>state.t);
    var dispatch = useDispatch()
    var [newtodo,  setnewtodo] = useState();
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input onChange={(e)=>{setnewtodo(e.target.value)}}></input>
            <button onClick={()=>{dispatch(addTodo(newtodo))}}>AddTodo</button>
            {
                todo?.map((todo, i) => {
                    return <li>{todo}
                    <button onClick={()=>{dispatch(deleteTodo(i))}}></button>
                    </li>
                    
                })
            }
        </div>
    )
}

export default Todolist;