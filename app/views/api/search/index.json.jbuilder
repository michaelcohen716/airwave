json.results do
  json.episodes do
    @episode_results.each do |episode|
      json.set! episode.id do
        json.partial! 'api/episodes/episode.json.jbuilder', episode: episode
      end
      json.set! episode.thumb do
        episode.series.image_thumb
      end
    end
  end
end
