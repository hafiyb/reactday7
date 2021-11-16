import * as type from '../types'

const defaultState = {
    isLoading: false,
    data : [],
    error : null
}

const todoReducer = (state = defaultState, action) =>{

    switch(action.type){
        case type.ADD_TODO: 
            return {
                isLoading : true,
                data: [...state.data],
                error: null, 
            }
        case type.ADD_TODO_SUCCESS:
            return {
                isLoading : false,
                data: [...state.data,action.payload],
                error: null, 
            }
        case type.ADD_TODO_FAIL:
            return {
                isLoading : false,
                data: [...state.data],
                error: action.error, 
            }
        case type.ADD_TODO_RESET:
            return {
                isLoading : false,
                data: [],
                error: action.error, 
            }
        case type.DEL_TODO: 
            return {
                isLoading : false,
                data : [...state.data],
                error: null,
            }
        case type.DEL_TODO_SUCCESS: 
            console.log(action.payload)
            return {
                isLoading : false,
                data : state.data.filter(list =>  list.key !== action.payload),
                error: null,
            }
        case type.DEL_TODO_FAIL: 
            return {
                isLoading : false,
                data : [...state.data],
                error: null,
            }
        default: 
        return state;
    }
}

export default todoReducer