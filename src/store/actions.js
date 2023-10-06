import {INC, DEC, Todo} from '../store/actionType';

export function countINC(){
    return {type:INC}
};

export function countDEC(){
    return {type:DEC}
}

export function addTodo(newtodo){
    return {type:Todo, payload:newtodo}
}