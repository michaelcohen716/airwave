export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `api/episodes/:episodeId/comments`,
    comment
  })
);
