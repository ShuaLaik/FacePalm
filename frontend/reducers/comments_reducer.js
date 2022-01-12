import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const CommentsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return Object.assign({}, newState, action.comments )
        case RECEIVE_COMMENT:
            return Object.assign({}, prevState, { [action.comment.id]: action.comment})
        case REMOVE_COMMENT:
            delete newState[action.commentId]
            return newState;
        default:
            return prevState;
    }
}

export default CommentsReducer