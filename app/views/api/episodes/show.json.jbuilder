json.episode do
  json.partial! 'api/episodes/episode.json.jbuilder', episode: @episode
end
