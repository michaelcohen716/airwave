json.results do
  json.array! @episodes do |episode|
    json.partial! 'api/episodes/episode.json.jbuilder', episode: episode
    episode.series.image_thumb
  end
end
