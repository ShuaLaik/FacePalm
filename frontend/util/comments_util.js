export const fetchComments = postId => (
    $.ajax({
        method: "GET",
        url: "/api/comments",
        data: {comment: { post_id: postId } }
    })
) 
export const fetchReplies = parentId => (
    $.ajax({
        method: "GET",
        url: `/api/comments/${parentId}`,
        data: { parent_id: parentId } 
    })
)
export const createComment = comment => (
    $.ajax({
        method:"POST",
        url: `/api/comments/`,
        data: { comment }
    })
)
export const updateComment = comment => (
    $.ajax({
        method:"PATCH",
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
)
export const deleteComment = commentId => (
    $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
)