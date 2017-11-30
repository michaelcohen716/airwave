export const search = (query) => {
  return $.ajax ({
    method: "get",
    url: '/api/search',
    data: {query}
  });
};

export const fetchEpisodes = () => {
  return $.ajax('api/episodes');
};
