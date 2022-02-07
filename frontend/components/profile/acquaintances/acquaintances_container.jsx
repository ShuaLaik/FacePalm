import { deleteAcquaintance } from "../../../actions/acquaintance_actions"
import { connect } from "react-redux"
import { fetchUser } from "../../../actions/user_actions"
import AcquaintancesIndex from "./acquaintances_index"
import { fetchAcquaintances } from "../../../actions/acquaintance_actions"
const mSTP = state => ({
    users: state.entities.users,
    acquaintances: state.entities.acquaintances,
    currentUser: state.sessions.id
})
const mDTP = dispatch => ({
    deleteAcquaintance: acquaint => dispatch(deleteAcquaintance(acquaint)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAcquaintances: () => dispatch(fetchAcquaintances())
})

export default connect(mSTP, mDTP)(AcquaintancesIndex)