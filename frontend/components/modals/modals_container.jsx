import { connect } from "react-redux"
import { closeModal } from "../../actions/modals_actions"
import { createPost } from "../../actions/post_actions"
import Modals from "./modals"

const mSTP = state => ({
    form: state.ui.modal,
    user: state.entities.users[state.sessions.id],
    post: {
        body: "",
        user_id: state.sessions.id
    },
})
const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modals)