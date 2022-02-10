import { DELETE_POST, RECEIVE_POST, RECEIVE_POSTS, RECEIVE_FEED_POSTS } from "../actions/post_actions";


const PostsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_FEED_POSTS:
            return Object.assign({}, prevState, action.posts)
        case RECEIVE_POST:
            return Object.assign({}, prevState, { [action.post.id]: action.post })
        case DELETE_POST:
            delete newState[action.postId]
            return newState;
        default:
            return prevState;
    }
}

export default PostsReducer;