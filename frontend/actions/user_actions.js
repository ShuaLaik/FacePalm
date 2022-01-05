export const RECEIVE_USER = "RECEIVE_USER"
export * as UserUtil from "../util/user_util"
const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUser = userId => dispatch => {
    return UserUtil.fetchUser(userId)
        .then((user => dispatch(receiveUser(user))))
}