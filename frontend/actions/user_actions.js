export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
import * as UserUtil from "../util/user_util"
const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})
const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const fetchUser = userId => dispatch => {
    return UserUtil.fetchUser(userId)
    .then((user => dispatch(receiveUser(user))),
    errors => dispatch(receiveErrors(errors.responseTEXT)))
        
}