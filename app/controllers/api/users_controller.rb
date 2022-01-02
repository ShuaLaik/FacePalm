class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save!
            log_in!(@user)
            render :show
        else
            render json: "Log in failed!!"
        end
    end

    def update
    end

    private
    def user_params
        params.require(:user).permit(:email, 
        :password, 
        :first_name, 
        :last_name, 
        :birthday, 
        :bio, 
        :profile_img_id, 
        :favorite_color
        )
    end
end