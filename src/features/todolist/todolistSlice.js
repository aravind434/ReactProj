import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todolist:['aravind', 'prashanth', 'laxman']
}

export const todolistSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todolist.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todolist.splice(action.payload,1)
        }
    }
})

export var { addTodo,deleteTodo } = todolistSlice.actions;
var todoReducer = todolistSlice.reducer;
export default todoReducer;