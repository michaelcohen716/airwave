class Api::SearchController < ApplicationController
  def index
    @episode_results = Episode.order(title: :asc).where("title ILIKE ? OR description ILIKE ?", "%#{search}", "%#{search}")
  end
end
