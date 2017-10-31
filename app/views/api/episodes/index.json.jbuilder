@episodes.each do |episode|
  json.set! episode.id do
    json.partial! 'api/episodes/episode.json.jbuilder', episode: episode
  end

end
