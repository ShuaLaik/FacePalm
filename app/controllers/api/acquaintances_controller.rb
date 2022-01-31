class Api::AcquaintancesController < ApplicationController

    def index
       @user = User.find_by(id: params[:acquaint][:user_id]) 
       @acquaintances = @user.acquaintances
       if @user
            render :index 
       else
            render json: ["Error, User Not Found"]
       end

    end

    def create
        @a1 = Acquaintance.new(acquaint_params)
        @a2 = Acquaintance.new(user_id: params[:acquaint][:aq_id], aq_id: params[:acquaint][:user_id])
        if @a1.save && @a2.save
            @user = params[:acquaint][:aq_id]
            render :show
        else
            render json: @a1.errors.full_messages, status: 422
        end

    end

    def destroy
        @a1 = Acquaintance.select("*").where("user_id=#{params[:acquaint][:user_id]} AND aq_id=#{params[:acquaint][:aq_id]}")[0]
        @a2 = Acquaintance.find_by(id: (@a1.id + 1))
        if !@a1.delete || !@a2.delete
            render json: ["User relation does not exist"], status: 422
        else
            @user = User.find_by(id: params[:acquaint][:user_id]) 
            @acquaintances = @user.acquaintances
            if @user
                    render :index 
            else
                    render json: ["Error, User Not Found"]
            end
        end
    end  

    private
    def acquaint_params
        params.require(:acquaint).permit(:user_id, :aq_id)
    end

end

