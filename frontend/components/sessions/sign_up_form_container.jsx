import { connect } from "react-redux";
import { signUpUser, removeErrors } from "../../actions/session_actions";
import SignUpForm from "./sign_up_form";

const mSTP = (state) => ({
    errors: state.errors,
    user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "2000-01-01"

    },
    formType: "Sign Up"
})
const mDTP = dispatch => ({
    FormAction: user => dispatch(signUpUser(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP,mDTP)(SignUpForm)