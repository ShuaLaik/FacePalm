import { connect } from "react-redux"
import Homepage from "./homepage"
import { logOutUser } from "../../actions/session_actions"

const mSTP = state => ({
    currentUser: state.sessions.id,
    users: state.entities.users
})

const mDTP = dispatch => ({
    logOutUser: () => dispatch(logOutUser())
})

export default connect(mSTP, mDTP)(Homepage)