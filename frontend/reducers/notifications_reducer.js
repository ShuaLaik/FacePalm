import { RECEIVE_NOTIFICATIONS, REMOVE_NOTIFICATION } from "../actions/notification_actions";

const NotificationsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_NOTIFICATIONS:
            return action.notifications
        case REMOVE_NOTIFICATION:
            delete newState[action.notifId]
            return newState
        default:
            return prevState;
    }
}

export default NotificationsReducer