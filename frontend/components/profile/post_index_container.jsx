import PostIndex from "./post_index"
import { connect } from "react-redux"
import { deletePost, fetchPosts } from "../../actions/post_actions"
import React from "react"
import { createUser } from "../../util/user_auth_util"


const mSTP = (state, ownProps) => ({
    currentUser: state.sessions.id,
    pageUser: ownProps.pageUser,
    posts: Object.values(state.entities.posts)
})
const mDTP = dispatch => ({
    fetchPosts: userId => dispatch(fetchPosts(userId)),
    deletePost: postId => dispatch(deletePost(postId)),
    editPost: post => dispatch(editPost(post))
})

export default connect(mSTP, mDTP)(PostIndex)