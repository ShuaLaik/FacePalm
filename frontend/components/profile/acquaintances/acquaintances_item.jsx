import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AcquaintancesItem extends Component {
    componentDidMount(){
        if (!this.props.users[this.props.aq])
        this.props.fetchUser(this.props.aq)
    }
  render() {
    if (!this.props.users[this.props.aq]) return null
    const user = this.props.users[this.props.aq]
    return <div key={this.props.aq} className="acquaintance-item">
        <div>
            <Link to={`/profile/${this.props.aq}`}><img src={user.avatarUrl}/></Link>
            <Link to={`/profile/${this.props.aq}`}><h2>{user.first_name} {user.last_name}</h2></Link>
        </div>
        <button onClick={() => this.props.deleteAquaintance({user_id: this.props.currentUser, aq_id: user.id})}>Remove</button>
       
    </div>;
  }
}
