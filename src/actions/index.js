import * as type from '../types'

export const addSubmit = (x) => {
    return {
        type: type.ADD_COUNT,
        payload: x,
    }
}

export const minusSubmit = (x) => {
    return {
        type: type.DEC_COUNT,
        payload: x,
    }
}

export const addTodo = (data) => (dispatch) => {
    try{
        dispatch({
            type: type.ADD_TODO,
        })
        setTimeout(()=> {
            dispatch({
                type: type.ADD_TODO_SUCCESS,
                payload : data  
            })
        }, 1000)
    }
    catch(error){
        dispatch({
            type: type.ADD_TODO_FAIL,
            error: error,
        })
    }

    // return{
    //     type: type.ADD_TODO,
    //     payload: data
    // }
}

export const delTodo = (key) => (dispatch) =>{
    try{
        dispatch({
            type: type.DEL_TODO,
        })
        setTimeout(()=> {
            dispatch({
                type: type.DEL_TODO_SUCCESS,
                payload : key  
            })
        }, 1000)
    }
    catch(error){
        dispatch({
            type: type.DEL_TODO_FAIL,
            error: error,
        })
    }
    // return{
    //     type: type.DEL_TODO,
    //     payload: key
    // }
}

export const addUser = (user) => {
        return{
            type: type.ADD_USER,
            payload: user
        }
}

export const checkUser = (user) => {
    return{
        type: type.CHECK_USER,
        payload: user
    }
}

export const logoutUser = () => {
    return{
        type: type.LOGOUT_USER 
    }
}

