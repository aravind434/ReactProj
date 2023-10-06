import {connect} from 'react-redux';
import React, { useState } from 'react';
var Todolist = function(props){
    var [newtodo, setnewtodo] = useState('');
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}></input>
            <button onClick={()=>{props.dispatch({type:'todolist', payload:newtodo})}}>AddTodo</button>
            <ul>{
                props.t.todolist.map(todo=>
                    {
                        return(
                            <li>{todo}</li>
                        )
                    })
            }</ul>
            
        </div>
        
    )
}

export default connect(store=>store)(Todolist);