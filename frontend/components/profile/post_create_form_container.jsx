import { connect } from "react-redux"
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
    action: post => dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(PostForm)