json.set! @user.id do
    json.extract! @user,
    :id,
    :email,
    :first_name, 
    :last_name, 
    :bio, 
    :birthday, 
    :favorite_color
    
end