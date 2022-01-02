class Api::SessionsController < ApplicationController
    
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            log_in!(@user)
            render "/api/users/show"
        else
            render json: "404, Invalid Credentials"
        end
    end

    def destroy
        if logged_in?
            log_out
            render json: {}
        else
            render json: "User not Logged in"
        end
    end

    private
    def session_params
        params.require(:session).permit(:email, :password)
    end

end