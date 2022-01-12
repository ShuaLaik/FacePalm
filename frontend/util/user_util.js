export const fetchUser = userId => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
)

export const updateUser = user => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${user.id}`,
        data: { user }
    })
)
export const updateUserPhoto = (formData, userId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
)