export const fetchWatchlist = () => (
  $.ajax({
    method: 'GET',
    url: 'api/watchlist_adds'
  })
);


export const fetchShowEpisode = episodeId => (
  $.ajax({
    method: 'GET',
    url: `api/episodes/${episodeId}`
  })
);

export const fetchSeries = seriesId => {
  return $.ajax({
    method: 'GET',
    url: `api/series/${seriesId}`
  });
};








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
