import { connect } from "react-redux"
import { addAcquaintance } from "../../actions/acquaintance_actions"
import { deleteNotification, fetchNotifications } from "../../actions/notification_actions"
import { fetchUser } from "../../actions/user_actions"
import NotificationsIndex from "./notifications_index"

const mSTP = state => ({
    notifications: state.entities.notifications,
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchNotifications: () => dispatch(fetchNotifications()),
    deleteNotification: notifId => dispatch(deleteNotification(notifId)),
    addAcquaintance: aquaint => dispatch(addAcquaintance(aquaint)),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(NotificationsIndex)