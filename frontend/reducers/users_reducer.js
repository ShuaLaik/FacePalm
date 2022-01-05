import { RECEIVE_USER } from "../actions/user_actions";

const { RECEIVE_CURRENT_USER } = require("../actions/session_actions");


const usersReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, prevState, { [action.user.id]: action.user })
        case RECEIVE_USER:
            return Object.assign({}, prevState, { [action.user.id]: action.user })
        default:
            return prevState;
    }
}

export default usersReducer