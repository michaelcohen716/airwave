class Api::SeriesController < ApplicationController
  def new
  end

  def show
    @series = Series.find(params[:id])
  end
end
