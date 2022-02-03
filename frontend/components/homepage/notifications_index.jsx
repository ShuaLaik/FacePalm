import React, { Component } from 'react';
import notifications_container from './notifications_container';
import NotificationsIndexItem from './notifications_index_item';

export default class NotificationsIndex extends Component {
    componentDidMount(){
        this.props.fetchNotifications()
    }
    render() {
        const notifications = Object.values(this.props.notifications)
        const NII = <h1>No Notifcations to show!</h1>
        if (notifications){
            
        }
        const { deleteNotification, users, fetchUser } = this.props
        console.log(notifications)
        return <div id="notification-tab">
            {notifications ? <h2>Notifications</h2> : <h2>No Notifications!</h2>}
            {notifications.map(notif =>{
                return <NotificationsIndexItem 
                users={users} 
                notification={notif} 
                fetchUser={fetchUser}
                deleteNotification={deleteNotification} />
            })}
        </div>;
    }
}
