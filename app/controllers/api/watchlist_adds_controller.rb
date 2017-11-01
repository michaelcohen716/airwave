class Api::WatchlistAddsController < ApplicationController
  def new
  end

  def create

  end

  def show
    @watchlist_add = WatchlistAdd.find(params[:id])
  end

  def index
    @watchlist_adds = current_user.watchlist_adds.find(params[:id])
  end

  private
  # def user_params
  #   params.require(:watchlist_add).permit(:username, :password)
  # end
end
