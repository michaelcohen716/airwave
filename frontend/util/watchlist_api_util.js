export const addEpisode = episodeId => (
  $.ajax({
    method: 'POST',
    url: 'api/watchlist_adds',
    data: { episodeId }
  })
);

export const deleteEpisode = watchlistAddId => (
  $.ajax({
    method: "DELETE",
    url: `api/watchlist_add/${watchlistAddId}`
  })
);

export const fetchEpisodes = episodes => (
  $.ajax({
    method: 'GET',
    url: 'api/watchlist_adds',
    data: { episodes }
  })
);

export const fetchShowEpisode = episodeId => (
  $.ajax({
    method: 'GET',
    url: `api/episodes/${episodeId}`,
    data: { episode }
  })
);
