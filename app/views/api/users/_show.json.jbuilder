json.extract! user, :id, :email, :first_name, :last_name, :bio, :favorite_color
json.birthday user.parse_time(user.birthday, 2)
json.avatarUrl url_for(user.avatar)
# json.coverUrl url_for(user.cover)
    # json.id @user.id
    # json.email @user.email
    # json.first_name @user.first_name
    # json.last_name @user.last_name 
    # json.bio @user.bio 
    # json.birthday @user.birthday
    # json.favorite_color @user.favorite_color