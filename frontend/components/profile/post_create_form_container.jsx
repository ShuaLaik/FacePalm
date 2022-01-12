import { connect } from "react-redux"
import { openModal } from "../../actions/modals_actions"
import { createPost } from "../../actions/post_actions"
import PostForm from "./post_form"

const mSTP = (state, ownProps) => ({
    post: {
        body: "",
        user_id: state.sessions.id
    },
    postUser: ownProps.postUser,
    currentUser: state.sessions.id,
    formType: "Create Post"
})
const mDTP = dispatch => ({
    action: post => dispatch(createPost(post)),
    modal: form => dispatch(openModal(form))
})

export default connect(mSTP, mDTP)(PostForm)