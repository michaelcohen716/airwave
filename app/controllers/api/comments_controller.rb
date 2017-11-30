class Api::CommentsController < ApplicationController
  def show

  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :episode_id)
  end
end
