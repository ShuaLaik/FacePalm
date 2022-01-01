class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        @user ||= user.find_by(session_token: session[:session_token])
    end

    def log_in!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
    end

    def logged_in?
        !!current_user
    end

    def log_out(user)
        user.session_token = reset_session_token!
        session[:session_token] = nil
    end
end
