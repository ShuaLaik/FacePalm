import { RECEIVE_EDIT_POST, REMOVE_EDIT_POST } from "../actions/post_actions";


const EditPostReducer = (prevState = null, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_EDIT_POST:
            return action.postId
        case REMOVE_EDIT_POST:
            return null;
        default:
            return prevState;
    }
}

export default EditPostReducer;