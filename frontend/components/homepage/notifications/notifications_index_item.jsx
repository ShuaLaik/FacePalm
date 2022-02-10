import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotificationsIndexItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        if (!this.props.users[this.props.notifier_id]){
            this.props.fetchUser(this.props.notification.notifier_id)
        }
    }

    handleClick(){
        
    }
  render() {
    const { notification } = this.props
    const notifier = this.props.users[notification.notifier_id]
    if (!notifier) return null;
    return <Link className="notification" to={`/profile/${notification.notifier_id}`} onClick={() => this.handleClick()}>
        <img src={notifier.avatarUrl}/>
        <h1>{notifier.first_name} sent a friend request!</h1>
    </Link>;
  }
}
