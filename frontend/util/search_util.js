export const search = (input) => {
  return $.ajax ({
    method: "get",
    url: '/api/search',
    data: { input }
  });
};
