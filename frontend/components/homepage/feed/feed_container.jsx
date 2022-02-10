import { connect } from "react-redux"
import { fetchComments } from "../../../actions/comment_actions"
import { openModal } from "../../../actions/modals_actions"
import { deletePost, fetchEditPost, fetchFeedPosts } from "../../../actions/post_actions"
import { fetchUser } from "../../../actions/user_actions"
import Feed from "./feed"

const mSTP = (state, ownProps) => ({
    currentUser: state.sessions.id,
    posts: Object.values(state.entities.posts),
    users: state.entities.users,
    aqs: state.sessions.acquaintances
})
const mDTP = dispatch => ({
    fetchPosts: userId => dispatch(fetchFeedPosts(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    deletePost: postId => dispatch(deletePost(postId)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    editPost: postId => dispatch(fetchEditPost(postId)),
    openModal: type => dispatch(openModal(type))
})
export default connect(mSTP, mDTP)(Feed)