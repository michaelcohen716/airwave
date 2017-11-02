json.episode do
  json.partial! 'api/episodes/episode.json.jbuilder', episode: @episode
end

json.other_episodes do
  @episode.series.episodes.limit(4).each do |episode|
    json.set! episode.id do
      json.partial! 'api/episodes/episode.json.jbuilder', episode: @episode
    end
  end
end
