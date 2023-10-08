import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";

function Counter(){
    var {count} = useSelector(state=>state.c)
    var dispatch= useDispatch()
    console.log(count);
    return(
        <div className="mybox">
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(inc())}}></button>
            <button onClick={()=>{dispatch(dec())}}></button>
        </div>
    )
}

export default Counter;