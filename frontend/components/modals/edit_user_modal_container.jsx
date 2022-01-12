import { connect } from "react-redux"
import { closeModal } from "../../actions/modals_actions"
import { updateUser } from "../../actions/user_actions"
import EditUserModal from "./edit_user_modal"

const mSTP = state => ({
    user: state.entities.users[state.sessions.id]
})
const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditUserModal)