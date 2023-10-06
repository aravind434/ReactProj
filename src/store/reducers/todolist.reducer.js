const initialState = {
    todolist: ["aravind", "charan", "fazil", "Vishnu"]
}

function todolistReducer(state=initialState,action){
    if(action.type==='todolist'){
        return {todolist:[...state.todolist,action.payload]}
    }
    return state
}

export default todolistReducer;