import { Todo } from "../actionType";

const initialState = {
    todolist: ["aravind", "charan", "fazil", "Vishnu"]
}

function todolistReducer(state=initialState,action){
    if(action.type===Todo){
        return {todolist:[...state.todolist,action.payload]}
    }
    return state
}

export default todolistReducer;