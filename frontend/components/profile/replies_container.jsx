import { connect } from "react-redux"
import { createComment, fetchReplies } from "../../actions/comment_actions"
import { fetchUser } from "../../actions/user_actions"
import Comments from "./comments"

const mSTP = (state, ownProps) => ({
    comments: Object.values(state.entities.comments).map(comment => {
        if (comment.parent_id === ownProps.podtId) {
            return comment
        }
    }),
    users: state.entities.users
})
const mDTP = dispatch => ({
    fetchReplies: commentId => dispatch(fetchReplies(commentId)),
    createComment: comment => dispatch(createComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(Comments)