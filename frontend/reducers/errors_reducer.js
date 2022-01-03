import SessionErrorsReducer from "./session_errors_reducer";

const { combineReducers } = require("redux");

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer
})

export default ErrorsReducer;