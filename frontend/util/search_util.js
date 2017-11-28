export const search = (results) => {
  return $.ajax ({
    method: "get",
    url: '/api/search',
    data: { results }
  });
};
