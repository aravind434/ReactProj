import React,{useState} from "react";
import {connect} from 'react-redux';
function Counter(props){
    var [newtodo, setnewtodo] = useState('');
    return(
    <div className="mybox">
        <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/><button onClick={()=>{props.dispatch({type:'todolist', payload:newtodo})}}>AddTodo</button>
        <h1>counter:{props.c.count}</h1>
        <button onClick={()=>{props.dispatch({type:'INC'})}}>INC</button>
        <button onClick={()=>{props.dispatch({type:'DEC'})}}>DEC</button>
    </div>
    )
}

export  default connect(store=>store)(Counter);