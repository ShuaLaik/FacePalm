import { connect } from "react-redux"
import { logInUser, logOutUser, removeErrors } from "../../actions/session_actions"
import LogInForm from "./log_in_form"

const mSTP = state => ({
    user: {
        email: "",
        password: ""
    },
    session: state.sessions.id,
    sessionErrors: state.errors.session
})
const mDTP = dispatch => ({
    logInUser: user => dispatch(logInUser(user)),
    logOutUser: () => dispatch(logOutUser()),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(LogInForm)