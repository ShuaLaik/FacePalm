class Api::CommentsController < ApplicationController

    def index
        @post = Post.find_by(id: params[:comment][:post_id])
        @comments = @post.comments
        @comments = @comments.select {|comment| comment.parent_comment == nil }
        if @comments 
            render :index
        else
            render json: ["No comments"], status: 404
        end
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_message, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.user_id == current_user.id && @comment.update(comment_params)
            render :show
        else
            render json: ["Something went wrong!"]
        end
    end

    def show
        @parent = Comment.find_by(id: params[:parent_id])
        @comments = @parent.child_comments
        render :index
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment.user_id == current_user.id && @comment != nil
            @comment.delete
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:user_id, :parent_comment, :post_id, :body)
    end



end