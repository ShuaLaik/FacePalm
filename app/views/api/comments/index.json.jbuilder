@comments.each do |comment| 
    json.set! comment.id do 
        # json.partial! "show", comment: comment
        json.extract! comment, :id, :body, :user_id, :post_id, :parent_comment
        json.created_at comment.parse_time(comment.created_at)
    end
end