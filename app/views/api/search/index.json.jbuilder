json.results do
  json.episodes do
    @episode_results.each do |episode|
      json.set! episode.id do
        json.partial! 'api/episodes/episode.json.jbuilder', episode: episode
        episode.series.image_thumb
      end
      # json.set! episode.image_thumb do
      # end
    end
  end
end
