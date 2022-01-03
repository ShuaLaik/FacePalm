const { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } = require("../actions/session_actions");


const SessionReducer = (prevState={ id: null}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState.id = action.user;  
            return newState;          
        case LOG_OUT_CURRENT_USER:
            newState[id] = null;
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return prevState;
    }
}

export default SessionReducer;