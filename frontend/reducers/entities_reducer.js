
import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: usersReducer
})

export default EntitiesReducer;