import { combineReducers } from "redux";

import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import removeReducer from './removeReducer';
import userReducer from "./userReducer";

// const rootReducer = combineReducers({
//     count : countReducer,
//     todo : todoReducer
// })

// export default rootReducer

export default combineReducers({
    count : countReducer,
    todo : todoReducer,
    remove : removeReducer,
    user: userReducer
})