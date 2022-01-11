import { connect } from "react-redux"
import { fetchComments, createComment, fetchReplies } from "../../actions/comment_actions"
import { fetchUser } from "../../actions/user_actions"
import Comments from "./comments"
import React from "react"


class LoadComments extends React.Component {

    render() {
        const { comments, postId, users, fetchComments, fetchReplies, createComment, fetchUser } = this.props;
        if (!comments) return null;
        return (
            <Comments
                comments={comments}
                postId={postId}
                users={users}
                fetchComments={fetchComments}
                fetchReplies={fetchReplies}
                createComment={createComment}
                fetchUser={fetchUser} />
        );
    }
}


const mSTP = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    postId: ownProps.postId,
    users: state.entities.users

})
const mDTP = dispatch => ({
    fetchComments: postId => dispatch(fetchComments(postId)),
    fetchReplies: commentId => dispatch(fetchReplies(commentId)),
    createComment: comment => dispatch(createComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(LoadComments)