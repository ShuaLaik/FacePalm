import * as CommentUtil from "../util/comments_util"

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})
const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})
const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})
export const fetchComments = postId => dispatch => {
    return CommentUtil.fetchComments(postId)
        .then(comments => dispatch(receiveComments(comments)))
} 
export const fetchReplies = parentId => dispatch => {
    return CommentUtil.fetchReplies(parentId)
        .then(comments => dispatch(receiveComments(comments)))
} 
export const createComment = comment => dispatch => {
    return CommentUtil.createComment(comment)
        .then( comment => dispatch(receiveComment(comment)))
}
export const updateComment = comment => dispatch => {
    return CommentUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
}
export const deleteComment = commentId => dispatch => {
    return CommentUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
}