import { RECEIVE_USER_ERRORS } from "../actions/user_actions";
import { ErrorType } from "../util/errors_util";


const UserErrorsReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return ErrorType(action.errors);
        default:
            return prevState;
    }
}

export default UserErrorsReducer;