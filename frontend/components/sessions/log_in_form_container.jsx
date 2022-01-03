import { connect } from "react-redux"
import { logInUser } from "../../util/user_auth_util"
import LogInForm from "./log_in_form"

const mSTP = state => ({
    user: {
        email: "",
        password: ""
    }
})
const mDTP = dispatch => ({
    logInUser: user => dispatch(logInUser(user))
})

export default connect(mSTP, mDTP)(LogInForm)