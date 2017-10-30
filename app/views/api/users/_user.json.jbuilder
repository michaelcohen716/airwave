json.user do
  json.extract! user, :id, :username
  json.watchlistIds user.watchlist_episode_ids
end

json.episodes do
  user.watchlist_episodes.limit(4).each do |episode|
    json.set! episode.id do
      json.extract! episode, :title, :description
    end
  end
end
