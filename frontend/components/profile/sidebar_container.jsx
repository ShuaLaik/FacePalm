import { connect } from "react-redux"
import Sidebar from "./sidebar"
import React from "react"
import { openModal } from "../../actions/modals_actions"


const mSTP = (state, ownProps) => ({
    pageUser: ownProps.pageUser,
    currentUser: state.sessions.id,
    allUsers: state.entities.users
})
const mDTP = dispatch => ({
    modal: form => dispatch(openModal(form))
})

export default connect(mSTP, mDTP)(Sidebar)