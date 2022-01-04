import * as UserAuthUtil from "../util/user_auth_util"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOG_OUT_CURRENT_USER = "LOG_OUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})
const logOutCurrentUser = () => ({
    type: LOG_OUT_CURRENT_USER,
    user: {}
})
const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})
export const logInUser = user => dispatch => {
    return UserAuthUtil.logInUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors)))
}
export const logOutUser = () => dispatch => {
    return UserAuthUtil.logOutUser()
        .then(() => dispatch(logOutCurrentUser()))
        .fail(errors => dispatch(receiveErrors(errors)))
}
export const signUpUser = user => dispatch => {
    return UserAuthUtil.createUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors)))
}