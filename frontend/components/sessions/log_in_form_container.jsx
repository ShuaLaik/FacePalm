import { connect } from "react-redux"
import { logInUser } from "../../actions/session_actions"
import { logOutUser } from "../../util/user_auth_util"
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