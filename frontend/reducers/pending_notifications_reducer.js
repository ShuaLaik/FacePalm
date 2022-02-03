import { RECEIVE_PENDING_NOTIFICATIONS, REMOVE_NOTIFICATION } from "../actions/notification_actions";

const PendingNotificationsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_PENDING_NOTIFICATIONS:
            return action.notifications
        case REMOVE_NOTIFICATION:
            delete newState[action.notifId]
            return newState
        default:
            return prevState;
    }
}

export default PendingNotificationsReducer