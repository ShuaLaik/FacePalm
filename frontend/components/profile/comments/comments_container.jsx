import { connect } from "react-redux"
import { fetchComments, createComment, fetchReplies, deleteComment } from "../../../actions/comment_actions"
import { fetchUser } from "../../../actions/user_actions"
import Comments from "./comments"
import React from "react"
import { fetchEditPost } from "../../../actions/post_actions"
import { openModal } from "../../../actions/modals_actions"


class LoadComments extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    
    render() {
        const { comments, postId, users, fetchComments, fetchReplies, createComment, fetchUser, currentUser, deleteComment, editComment, openModal } = this.props;
        if (!comments) return null;
        return (
            <Comments
                currentUser={currentUser}
                comments={comments}
                postId={postId}
                deleteComment={deleteComment}
                users={users}
                fetchComments={fetchComments}
                fetchReplies={fetchReplies}
                createComment={createComment}
                fetchUser={fetchUser} 
                editComment = {editComment}/>
        );
    }
}


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.sessions.id],
    comments: Object.values(state.entities.comments),
    postId: ownProps.postId,
    users: state.entities.users

})
const mDTP = dispatch => ({
    fetchComments: postId => dispatch(fetchComments(postId)),
    fetchReplies: commentId => dispatch(fetchReplies(commentId)),
    createComment: comment => dispatch(createComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    editComment: postId => dispatch(fetchEditPost(postId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    openModal: type => dispatch(openModal(type))
})

export default connect(mSTP, mDTP)(Comments)