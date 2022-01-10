import * as PostUtil from "../util/post_util"


export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const DELETE_POST = "DELETE_POST"
export const RECEIVE_POST_ERRORS = "POST_ERRORS"

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})
const receivePost = post => ({
    type: RECEIVE_POST,
    post
})
const removePost = postId => ({
    type: DELETE_POST,
    postId
})

export const fetchPosts = userId => dispatch => {
    return PostUtil.fetchPosts(userId)
        .then(posts => dispatch(receivePosts(posts)))
}
export const fetchPost = postId => dispatch => {
    return PostUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
}
export const createPost = post => dispatch => {
    return PostUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
}
export const updatePost = post => dispatch => {
    return PostUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)))
}
export const deletePost = postId => dispatch => {
    return PostUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
}