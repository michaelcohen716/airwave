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

json.comments do
  @episode.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
      json.username comment.user.username
    end
  end
end
