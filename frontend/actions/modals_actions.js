export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"


const startModal = form => ({
    type: OPEN_MODAL,
    form
})
const endModal = () => ({
    type: CLOSE_MODAL
})

export const openModal = form => dispatch => {
    return dispatch(startModal(form))
}
export const closeModal = () => dispatch => {
    return dispatch(endModal())
}
