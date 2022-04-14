export const getFilteredVideo = (allVideo, filterCase) => {
  if (!filterCase) {
    return allVideo
  }
  return allVideo.filter(video => {
    return video.categoryName === filterCase
  })
}
