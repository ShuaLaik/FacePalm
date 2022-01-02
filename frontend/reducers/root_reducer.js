import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";

const RootReducer = combineReducers({
    sessions: SessionReducer
})

export default RootReducer;