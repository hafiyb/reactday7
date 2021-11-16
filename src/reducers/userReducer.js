import * as type from '../types'

const defaultState={
    user: [],
    status : false
}

const userReducer = (state = defaultState, action) =>{
    switch(action.type){
        case type.ADD_USER:
            return {
                user: [...state.user, action.payload],
                status: false
            }

        case type.ADD_USER_RESET:
            return  {
                user: [],
                status : false
            }
        case type.CHECK_USER:
            console.log(action.payload.username)
            let found = false
            let status = false
            state.user.forEach(list => {
                if(Object.values(list)[0] == action.payload.username){
                    found = true
                    console.log('found')
                    status = true
                }
            });
            if(found == false){
                alert('User not found')
            }
            return  {
                user: [...state.user],
                status : status
            }
            // break
        default:
            return state 
    }
}

export default userReducer