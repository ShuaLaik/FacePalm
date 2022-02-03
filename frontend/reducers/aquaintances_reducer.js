import { RECEIVE_ACQUAINTANCES, REMOVE_ACQUAINTANCE } from "../actions/acquaintance_actions";

const AcquaintanceReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_ACQUAINTANCES:
            return action.aquaintances
        default:
            return prevState;
    }
}

export default AcquaintanceReducer