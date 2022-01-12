import { connect } from "react-redux"
import { closeModal } from "../../actions/modals_actions";
import { updateUserPhoto } from "../../actions/user_actions";
import EditProfilePic from "./edit_profile_pic"

const mSTP = state => ({
    user: state.entities.users[state.sessions.id]
})
const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateUserPhoto: (formData, userId) => dispatch(updateUserPhoto(formData, userId))
})


export default connect(mSTP, mDTP)(EditProfilePic);