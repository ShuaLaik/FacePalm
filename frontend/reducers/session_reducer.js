import { combineReducers } from "redux";
import AcquaintanceReducer from "./session_acquaintance_reducer";
import IdReducer from "./id_reducer";

const SessionReducer = combineReducers({
    id: IdReducer,
    acquaintances: AcquaintanceReducer
})

export default SessionReducer