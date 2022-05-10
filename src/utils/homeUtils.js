export const getFilteredVideo = (allVideo, filterCase) => {
  if (!filterCase || filterCase === 'All') {
    return allVideo
  }
  console.log(filterCase);
  return allVideo.filter(video => {
    return video.categoryName === filterCase
  })
}
export const generateThumbnail = videoId =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
