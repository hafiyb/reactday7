import * as type from '../types'
// import {store} from '../store/configureStore'


const defaultState = {
    isLoading: false,
    data : [],
    error : null
}

// const todoData = store
// console.log(todoData)

const removeReducer = (state = defaultState, action) =>{
    switch(action.type){
    case type.DEL_TODO: 
        return {
            isLoading : true,

        }
    case type.DEL_TODO_SUCCESS: 
        console.log(action.payload)
        return {
            isLoading : false,

        }
    case type.DEL_TODO_FAIL: 
        return {
            isLoading : false,

        }
    default: 
    return state;
    }
}


export default removeReducer