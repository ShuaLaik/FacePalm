

export const createUser = user => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
)

export const logInUser = user => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    })
)

export const logOutUser = () =>(
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
)