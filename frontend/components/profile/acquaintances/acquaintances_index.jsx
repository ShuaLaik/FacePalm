import React, { Component } from 'react';
import AcquaintancesItem from './acquaintances_item';

export default class AcquaintancesIndex extends Component {
    componentWillMount(){
        this.props.fetchAcquaintances({user_id: this.props.pageUser.id})
    }

  render() {
    const {acquaintances, fetchUser, deleteAcquaintance, users, currentUser} = this.props
    return <div id='acquaintances-container'>
        <h1>Acquaintances</h1>
        <div>
            {acquaintances.map(aq => {
                return <AcquaintancesItem 
                aq={aq}
                key={aq}
                fetchUser={fetchUser}
                users={users}
                currentUser={currentUser}
                deleteAcquaintance={deleteAcquaintance}/>
            })}
        </div>
    </div>;
  }
}
