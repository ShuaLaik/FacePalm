import { REMOVE_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import { ErrorType } from "../util/errors_util";

const SessionErrorsReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return [];    
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case REMOVE_ERRORS:
            return [];
        default:
            return prevState;
    }
}

export default SessionErrorsReducer