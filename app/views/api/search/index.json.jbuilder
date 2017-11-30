json.results do
  json.array! @episode_results do |episode|
    json.partial! 'api/episodes/episode.json.jbuilder', episode: episode
    episode.series.image_thumb
  end  
end
