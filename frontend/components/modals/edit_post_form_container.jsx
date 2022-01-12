import { connect } from "react-redux"
import { closeModal } from "../../actions/modals_actions"
import { updatePost } from "../../actions/post_actions"
import PostForm from "./post_form"

const mSTP = state => ({
    user: state.entities.users[state.sessions.id],
    post: state.entities.posts[state.ui.editPost],
    type: "Edit Post"
})
const mDTP = dispatch => ({
    action: post => dispatch(updatePost(post)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostForm)