import { connect } from "react-redux"
import { addAcquaintance, deleteAcquaintance, fetchAcquaintances } from "../../../actions/acquaintance_actions"
import { openModal } from "../../../actions/modals_actions"
import { createNotification, deleteNotification } from "../../../actions/notification_actions"
import Button from "./button"

const mSTP = (state, ownProps) => {
    debugger
    return {
    pageUser: ownProps.pageUser,
    currentUser: state.sessions.id,
    users: state.entities.users,
    pendingNotifications: state.entities.pendingNotifications,
    notifications: state.entities.notifications,
    acqs: state.sessions.acquaintances
}}
const mDTP = dispatch => ({
    createNotification: notif => dispatch(createNotification(notif)),
    deleteNotification: notifId => dispatch(deleteNotification(notifId)),
    addAcquaintance: acquaint => dispatch(addAcquaintance(acquaint)),
    fetchAcquaintances: userId => dispatch(fetchAcquaintances({user_id: userId})),
    deleteAcquaintance: acquaint => dispatch(deleteAcquaintance(acquaint)),
    modal: form => dispatch(openModal(form))
})

export default connect(mSTP, mDTP)(Button)