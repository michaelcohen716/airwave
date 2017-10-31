
class Api::EpisodesController < ApplicationController
  def show
    @episode = Episode.find(params[:id])

  end


  def random_watchlist
    all_episodes = Episode.all
    random_indices = (0...all_episodes.length).to_a.sample(4)
    @episodes = random_indices.map do |idx|
      all_episodes[idx]
    end

    render :index
  end
end
