import PostIndex from "./post_index"
import { connect } from "react-redux"
import { deletePost, fetchEditPost, fetchPosts } from "../../../actions/post_actions"
import { fetchComments } from "../../../actions/comment_actions"
import { openModal } from "../../../actions/modals_actions"


const mSTP = (state, ownProps) => ({
    currentUser: state.sessions.id,
    pageUser: ownProps.pageUser,
    posts: Object.values(state.entities.posts)
})
const mDTP = dispatch => ({
    fetchPosts: userId => dispatch(fetchPosts(userId)),
    deletePost: postId => dispatch(deletePost(postId)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    editPost: postId => dispatch(fetchEditPost(postId)),
    openModal: type => dispatch(openModal(type))
})

export default connect(mSTP, mDTP)(PostIndex)