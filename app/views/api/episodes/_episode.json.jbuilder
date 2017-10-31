json.episode do
  json.extract! episode, :title, :description, :id
  json.videoUrl episode.video.url
end
