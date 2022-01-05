import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import Profile from "./profile"

const mSTP = (state, ownProps) => ({
    pageUser: state.entities.users[ownProps.match.params.id]
})
const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser)
})

export default connect(mSTP, mDTP)(Profile)