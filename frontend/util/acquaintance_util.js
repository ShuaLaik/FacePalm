export const fetchAcquaintances = acquaint => (
    $.ajax({
        method: "GET",
        url: "/api/acquaintances",
        data: { acquaint }
    })
)

export const addAcquaintance = acquaint => (
    $.ajax({
        method: "POST",
        url: "/api/acquaintances",
        data: { acquaint }
    })
)

export const deleteAcquaintance = acquaint => (
    $.ajax({
        method: "DELETE",
        url: "/api/acquaintances/1",
        data: { acquaint }
    })
)