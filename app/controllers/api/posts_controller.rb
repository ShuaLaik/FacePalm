class Api::PostsController < ApplicationController

    def index
        @user = User.find_by(id: post_params[:user_id])
        @posts = @user.posts
        render :index
    end
    
    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: post_params_with_id[:id])
        if @post.user_id == current_user.id && @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end

    end 

    def show
        @post = Post.find_by(id: params[:id])
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post.user_id == current_user.id
            @post.delete
        else
            render json: ["Error: Post couldn't be deleted"]
        end
    end

    private
    def post_params
        params.require(:post).permit(:body, :user_id)
    end
    def post_params_with_id
        params.require(:post).permit(:id, :body, :user_id)
    end
    
end