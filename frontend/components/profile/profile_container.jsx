import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import Profile from "./profile"
import React from 'react'

class LoadProfile extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            this.props.fetchUser(this.props.match.params.id)
        }
    }
    render() {
        const { action, pageUser, currentUser, fetchUser } = this.props;
        if (!pageUser) return null;
        return (
            <Profile
                action={action}
                pageUser={pageUser}
                currentUser={currentUser}
                fetchUser={fetchUser}
                pageid={this.props.match.params.id} />
        );
    }
}


const mSTP = (state, ownProps) => ({
    pageUser: state.entities.users[ownProps.match.params.id],
    currentUser: state.sessions.id
})
const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(LoadProfile)