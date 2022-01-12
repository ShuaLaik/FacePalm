import { combineReducers } from "redux";
import EntitiesReducer from "./entities_reducer";
import ErrorsReducer from "./errors_reducer";
import SessionReducer from "./session_reducer";
import UiReducer from "./ui";

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    sessions: SessionReducer,
    errors: ErrorsReducer,
    ui: UiReducer
})

export default RootReducer;