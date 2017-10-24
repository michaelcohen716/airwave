class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render 'api/users/show'
    else
      render json: ["No one signed in"], status: 404
    end
  end
end
