export const getVideoDetails = (videos, videoId) =>
  videos.find(video => video._id === videoId)
