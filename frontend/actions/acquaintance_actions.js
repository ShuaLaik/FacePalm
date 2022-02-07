import * as AcquaintanceUtil from "../util/acquaintance_util"
import { fetchUser } from "./user_actions"

export const RECEIVE_ACQUAINTANCES = "RECEIVE_ACQUAINTANCES"
export const REMOVE_ACQUAINTANCE = "REMOVE_ACQUAINTANCE"

const receiveAcquaintances = acquaintances => ({
    type: RECEIVE_ACQUAINTANCES,
    acquaintances
})

export const fetchAcquaintances = acquaint => dispatch => {
    return AcquaintanceUtil.fetchAcquaintances(acquaint)
        .then(acquaintances => dispatch(receiveAcquaintances(acquaintances)))
}
export const addAcquaintance = acquaint => dispatch => {
    return AcquaintanceUtil.addAcquaintance(acquaint)
        .then(acquaintances => dispatch(receiveAcquaintances(acquaintances)))
}
export const deleteAcquaintance = acquaint => dispatch => {
    return AcquaintanceUtil.deleteAcquaintance(acquaint)
        .then(acquaintances => dispatch(receiveAcquaintances(acquaintances)))
}