import React,{useState} from "react";
import {connect} from 'react-redux';
import {countINC,countDEC,addTodo} from '../store/actions';
function Counter(props){
    var [newtodo, setnewtodo] = useState('');
    return(
    <div className="mybox">
        <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/><button onClick={()=>{props.dispatch(addTodo(newtodo))}}>AddTodo</button>
        <h1>counter:{props.c.count}</h1>
        <button onClick={()=>{props.dispatch(countINC())}}>INC</button>
        <button onClick={()=>{props.dispatch(countDEC())}}>DEC</button>
    </div>
    )
}

export  default connect(store=>store)(Counter);