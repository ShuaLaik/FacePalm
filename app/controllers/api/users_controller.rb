class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            @user.avatar.attach(io: File.open("app/assets/images/default-profile.jpeg"), filename: "default-profile.jpeg")
            log_in!(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.id == current_user.id && @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user.avatar.attached? == false
            @user.avatar.attach(io: File.open("app/assets/images/default-profile.jpeg"), filename: "default-profile.jpeg")
        end
        render "api/users/show"
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
        :favorite_color,
        :avatar
        )
    end
end