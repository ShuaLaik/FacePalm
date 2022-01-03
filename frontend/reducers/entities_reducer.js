
import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: usersReducer
})

export default EntitiesReducer;

// const EntitiesReducer = (prevState = {}, action) => {
//     Object.freeze(prevState);
//     let newState = Object.assign({}, prevState)
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
            
//         default:
//             return prevState;
//     }
// }
