import { connect } from "react-redux"
import { closeModal } from "../../actions/modals_actions"
import { createPost } from "../../actions/post_actions"
import Modals from "./modals"
import PostForm from "./post_form"

const mSTP = state => ({
    user: state.entities.users[state.sessions.id],
    post: {
        body: "",
        user_id: state.sessions.id
    },
    type: "Post"
})
const mDTP = dispatch => ({
    action: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostForm)