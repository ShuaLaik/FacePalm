import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const SessionErrorsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            const state = {}
            return state;      
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return prevState;
    }
}

export default SessionErrorsReducer