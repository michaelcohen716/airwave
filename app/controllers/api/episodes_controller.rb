class Api::EpisodesController < ApplicationController
  def show
    @episode = Episode.find(params[:id])
  end

  def index
    @episodes = Episode.all
    if params[:search]
      @episodes = Episode.search(params[:search]).order("title ASC")
    else
      @episodes = Episode.all.order("title ASC")
    end
  end
end
