import { connect } from "react-redux"
import { updateComment } from "../../actions/comment_actions"
import { closeModal } from "../../actions/modals_actions"
import PostForm from "./post_form"

const mSTP = state => ({
    user: state.entities.users[state.sessions.id],
    post: state.entities.comments[state.ui.editPost],
    type: "Update Comment"
})
const mDTP = dispatch => ({
    action: comment => dispatch(updateComment(comment)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostForm)