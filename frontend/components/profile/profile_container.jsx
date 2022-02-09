import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import Profile from "./profile"
import React from 'react'
import { fetchPosts } from "../../actions/post_actions"
import { openModal } from "../../actions/modals_actions"
import { createNotification, fetchNotifications, fetchPendingNotifcations } from "../../actions/notification_actions"
import notifications_container from "../homepage/notifications_container"
import { deleteNotification} from "../../actions/notification_actions"
import { addAcquaintance, deleteAcquaintance, fetchAcquaintances } from "../../actions/acquaintance_actions"

class LoadProfile extends React.Component {

    componentDidMount() {
        if (!this.props.users[this.props.match.params.id]){
            this.props.fetchUser(this.props.match.params.id)
        }
        this.props.fetchPosts(this.props.match.params.id)
        this.props.fetchNotifications()
        this.props.fetchPendingNotifcations()

    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            if (!this.props.users[this.props.match.params.id]){
               
                this.props.fetchUser(this.props.match.params.id)
            }
        }
        
    }
    render() {
        const { action, 
            pageUser, 
            currentUser, 
            fetchUser, 
            posts, 
            modal, 
            fetchNotifications, 
            fetchPendingNotifcations, 
            pendingNotifications, 
            notifications, 
            createNotification, 
            deleteNotification, 
            addAcquaintance, 
            acqs, 
            fetchAcquaintances,
            deleteAcquaintance
            } = this.props;
        if (!pageUser) return null;
        return (
            <Profile
                modal={modal}
                action={action}
                pageUser={pageUser}
                currentUser={currentUser}
                fetchUser={fetchUser}
                posts={posts}
                createNotification={createNotification}
                pendingNotifications={pendingNotifications}
                notifications={notifications}
                fetchPendingNotifcations={fetchPendingNotifcations}
                fetchNotifications={fetchNotifications}
                deleteNotification={deleteNotification}
                addAcquaintance={addAcquaintance}
                fetchAcquaintances={fetchAcquaintances}
                acqs={acqs}
                deleteAcquaintance={deleteAcquaintance}
                pageid={this.props.match.params.id} />

        );
    }
}


const mSTP = (state, ownProps) => ({
    pageUser: state.entities.users[ownProps.match.params.id],
    currentUser: state.sessions.id,
    users: state.entities.users,
    pendingNotifications: state.entities.pendingNotifications,
    notifications: state.entities.notifications,
    acqs: state.sessions.acquaintances
})
const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPosts: userId => dispatch(fetchPosts(userId)),
    modal: form => dispatch(openModal(form)),
    fetchNotifications: () => dispatch(fetchNotifications()),
    fetchPendingNotifcations: () => dispatch(fetchPendingNotifcations()),
    createNotification: notif => dispatch(createNotification(notif)),
    deleteNotification: notifId => dispatch(deleteNotification(notifId)),
    addAcquaintance: acquaint => dispatch(addAcquaintance(acquaint)),
    fetchAcquaintances: userId => dispatch(fetchAcquaintances({user_id: userId})),
    deleteAcquaintance: acquaint => dispatch(deleteAcquaintance(acquaint))
})

export default connect(mSTP, mDTP)(LoadProfile)