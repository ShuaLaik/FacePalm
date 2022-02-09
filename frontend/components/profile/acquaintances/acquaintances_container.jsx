import { deleteAcquaintance } from "../../../actions/acquaintance_actions"
import { connect } from "react-redux"
import { fetchUser } from "../../../actions/user_actions"
import AcquaintancesIndex from "./acquaintances_index"
import { fetchUserAcquaintances } from "../../../actions/acquaintance_actions"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    pageUser: ownProps.pageUser,
    acquaintances: state.entities.acquaintances,
    currentUser: state.sessions.id
})
const mDTP = dispatch => ({
    deleteAcquaintance: acquaint => dispatch(deleteAcquaintance(acquaint)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAcquaintances: acquaint => dispatch(fetchUserAcquaintances(acquaint))
})

export default connect(mSTP, mDTP)(AcquaintancesIndex)