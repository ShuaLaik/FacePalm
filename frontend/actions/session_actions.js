export * as UserAuthUtil from "../util/user_auth_util"
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
const logInUser = user => dispatch => {
    return UserAuthUtil.logInUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
}
const logOutUser = () => dispatch => {
    return UserAuthUtil.logOutUser()
        .then(() => dispatch(logOutCurrentUser()))
}