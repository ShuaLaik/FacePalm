import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modals_actions";

const ModalReducer = (prevState = null, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case OPEN_MODAL:
            return action.form
        case CLOSE_MODAL:
            return null;
        default:
            return prevState;
    }
}

export default ModalReducer;