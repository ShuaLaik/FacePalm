class Api::NotificationsController < ApplicationController
    
    def index
        @user = current_user
        @notifs = @user.notifications
        render :index
    end

    def show
        @user = current_user
        @notifs = Notification.select("*").where("notifier_id=#{current_user.id}")
        render :index
    end

    def create
        @notif = Notification.new(notif_params)
        if @notif.save
            render json: "Success"
        else
            render json: @notif.errors.full_messages, status: 422
        end

    end

    def destroy
        @notif = Notification.find_by(id: params[:id])
        if @notif.delete
            render json: "Success"
        else
            render json: ["Error, Notification not deleted"], status: 422
        end
    end

    private
    def notif_params
        params.require(:notification).permit(:user_id, :notifier_id, :notif_type)
    end
end