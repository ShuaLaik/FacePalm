import { connect } from "react-redux"
import { logInUser, logOutUser } from "../../actions/session_actions"
import LogInForm from "./log_in_form"

const mSTP = state => ({
    user: {
        email: "",
        password: ""
    },
    session: state.sessions.id
})
const mDTP = dispatch => ({
    logInUser: user => dispatch(logInUser(user)),
    logOutUser: () => dispatch(logOutUser())
})

export default connect(mSTP, mDTP)(LogInForm)