export const fetchNotifications = () => (
    $.ajax({
        method: "GET",
        url: "/api/notifications/"
    })
)

export const fetchPendingNotifcations = () => (
    $.ajax({
        method: "GET",
        url: "/api/notifications/1"
    })
)

export const createNotification = notification => (
    $.ajax({
        method: "POST",
        url: "/api/notifications",
        data: { notification }
    })
)

export const deleteNotification = notifId => (
    $.ajax({
        method: "DELETE",
        url: `/api/notifications/${notifId}`
    })
)