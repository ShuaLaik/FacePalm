@posts.each do |post| 
    json.set! post.id do 
        json.partial! 'show', post: post

    end
end