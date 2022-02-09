import * as AcquaintanceUtil from "../util/acquaintance_util"

export const RECEIVE_ACQUAINTANCES = "RECEIVE_ACQUAINTANCES"
export const REMOVE_ACQUAINTANCE = "REMOVE_ACQUAINTANCE"
export const RECEIVE_USER_ACQUAINTANCES = "RECEIVE_USER_ACQUAINTANCES"

const receiveAcquaintances = acquaintances => ({
    type: RECEIVE_ACQUAINTANCES,
    acquaintances
})
const receiveUserAcquaintances = acquaintances => ({
    type: RECEIVE_USER_ACQUAINTANCES,
    acquaintances
})

export const fetchAcquaintances = acquaint => dispatch => {
    return AcquaintanceUtil.fetchAcquaintances(acquaint)
        .then(acquaintances => dispatch(receiveAcquaintances(acquaintances)))
}
export const fetchUserAcquaintances = acquaint => dispatch => {
    return AcquaintanceUtil.fetchAcquaintances(acquaint)
        .then(acquaintances => dispatch(receiveUserAcquaintances(acquaintances)))
}
export const addAcquaintance = acquaint => dispatch => {
    return AcquaintanceUtil.addAcquaintance(acquaint)
        .then(acquaintances => dispatch(receiveAcquaintances(acquaintances)))
}
export const deleteAcquaintance = acquaint => dispatch => {
    return AcquaintanceUtil.deleteAcquaintance(acquaint)
        .then(acquaintances => dispatch(receiveAcquaintances(acquaintances)))
}