import { connect } from "react-redux"
import Sidebar from "./sidebar"
import React from "react"


const mSTP = (state, ownProps) => ({
    pageUser: ownProps.pageUser,
    currentUser: state.sessions.id,
    allUsers: state.entities.users
})
const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Sidebar)