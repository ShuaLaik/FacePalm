const { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } = require("../actions/session_actions");


const IdReducer = (prevState = null, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState = action.user.id;  
            return newState;          
        case LOG_OUT_CURRENT_USER:
            newState = null;
            return newState;
        default:
            return prevState;
    }
}

export default IdReducer;