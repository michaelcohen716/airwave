json.series do
  json.partial! 'api/series/series.json.jbuilder', series: @series
end

json.episodes do
  @series.episodes.each do |episode|
    json.set! episode.id do
      json.partial! 'api/episodes/episode', episode: episode
    end
  end
end
