import SessionErrorsReducer from "./session_errors_reducer";
import UserErrorsReducer from "./user_errors";

const { combineReducers } = require("redux");

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    user: UserErrorsReducer
})

export default ErrorsReducer;