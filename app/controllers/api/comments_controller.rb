class Api::CommentsController < ApplicationController
  def show

  end

  def create
    @comment = Comment.new(comment_params)
    @comment.episode_id = params[:episode_id]
    @comment.user_id = current_user.id
    if @comment.save
      render "api/comments/comment"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
