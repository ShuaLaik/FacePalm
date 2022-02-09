import { connect } from "react-redux"
import Homepage from "./homepage"
import { logOutUser } from "../../actions/session_actions"
import { fetchNotifications, fetchPendingNotifcations } from "../../actions/notification_actions"

const mSTP = state => ({
    currentUser: state.sessions.id,
    users: state.entities.users
})

const mDTP = dispatch => ({
    logOutUser: () => dispatch(logOutUser()),
    fetchNotifications: () => dispatch(fetchNotifications()),
    fetchPendingNotifcations: () => dispatch(fetchPendingNotifcations()),
})

export default connect(mSTP, mDTP)(Homepage)