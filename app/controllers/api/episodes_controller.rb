class Api::EpisodesController < ApplicationController
  def show
    @episode = Episode.find(params[:id])
  end

  def index
    @recipes = Recipe.all
    if params[:search]
      @recipes = Recipe.search(params[:search]).order("title ASC")
    else
      @recipes = Recipe.all.order("title ASC")
    end
  end
end
