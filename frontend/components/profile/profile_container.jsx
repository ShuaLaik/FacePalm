import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import Profile from "./profile"
import React from 'react'
import { fetchPosts } from "../../actions/post_actions"
import { openModal } from "../../actions/modals_actions"

class LoadProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id)
        this.props.fetchPosts(this.props.match.params.id)

    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            this.props.fetchUser(this.props.match.params.id)
        }
    }
    render() {
        const { action, pageUser, currentUser, fetchUser, posts, modal } = this.props;
        if (!pageUser) return null;
        return (
            <Profile
                modal={modal}
                action={action}
                pageUser={pageUser}
                currentUser={currentUser}
                fetchUser={fetchUser}
                posts={posts}
                pageid={this.props.match.params.id} />
        );
    }
}


const mSTP = (state, ownProps) => ({
    pageUser: state.entities.users[ownProps.match.params.id],
    currentUser: state.sessions.id
})
const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPosts: userId => dispatch(fetchPosts(userId)),
    modal: form => dispatch(openModal(form))
})

export default connect(mSTP, mDTP)(LoadProfile)