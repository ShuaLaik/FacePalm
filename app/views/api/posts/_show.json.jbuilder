json.extract! post, :id, :body, :user_id
json.created_at post.parse_time(post.created_at)
# json.created_at("#{m} #{d}, #{y} #{h}:#{min}#{am}")