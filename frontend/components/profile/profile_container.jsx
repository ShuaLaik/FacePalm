import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import Profile from "./profile"
import React from 'react'
import { fetchPosts } from "../../actions/post_actions"
import { openModal } from "../../actions/modals_actions"
import { fetchNotifications, fetchPendingNotifcations } from "../../actions/notification_actions"
import notifications_container from "../homepage/notifications_container"

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
        const { action, pageUser, currentUser, fetchUser, posts, modal, fetchNotifications, fetchPendingNotifcations, pendingNotifications, notifications } = this.props;
        if (!pageUser) return null;
        return (
            <Profile
                modal={modal}
                action={action}
                pageUser={pageUser}
                currentUser={currentUser}
                fetchUser={fetchUser}
                posts={posts}
                pendingNotifications={pendingNotifications}
                notifications={notifications}
                fetchPendingNotifcations={fetchPendingNotifcations}
                fetchNotifications={fetchNotifications}
                pageid={this.props.match.params.id} />

        );
    }
}


const mSTP = (state, ownProps) => ({
    pageUser: state.entities.users[ownProps.match.params.id],
    currentUser: state.sessions.id,
    users: state.entities.users,
    pendingNotifications: state.entities.pendingNotifications,
    notifications: state.entities.notifications
})
const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPosts: userId => dispatch(fetchPosts(userId)),
    modal: form => dispatch(openModal(form)),
    fetchNotifications: () => dispatch(fetchNotifications()),
    fetchPendingNotifcations: () => dispatch(fetchPendingNotifcations())
})

export default connect(mSTP, mDTP)(LoadProfile)