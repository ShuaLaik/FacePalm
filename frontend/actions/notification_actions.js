import * as NotificationUtil from "../util/notification_util"

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS"
export const RECEIVE_PENDING_NOTIFICATIONS = "RECEIVE_PENDING_NOTIFICATIONS"
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"

const receiveNotification = notifications => ({
    type: RECEIVE_NOTIFICATIONS,
    notifications
})

const receivePendingNotifications = notifications => ({
    type: RECEIVE_PENDING_NOTIFICATIONS,
    notifications
})

const removeNotification = notifId => ({
    type: REMOVE_NOTIFICATION,
    notifId
})

export const fetchNotifications = () => dispatch => {
    return NotificationUtil.fetchNotifications()
        .then(notifications => dispatch(receiveNotification(notifications)))
        .then(notifications => dispatch(receivePendingNotification(notifications)))
}

export const fetchPendingNotifcations = () => dispatch => {
    return NotificationUtil.fetchPendingNotifcations()
        .then(notifications => dispatch(receivePendingNotification(notifications)))
}

export const createNotification = notification => dispatch => {
    return NotificationUtil.createNotification(notification)
        .then(notifications => dispatch(receivePendingNotification(notifications)))
}

export const deleteNotification = notifId => dispatch => {
    return NotificationUtil.deleteNotification(notifId)
        .then(() => dispatch(deleteNotification(notifId)))
}