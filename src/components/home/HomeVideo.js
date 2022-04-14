import React from 'react'
import { useHome } from '../../context/HomeContext'
import { getFilteredVideo } from '../../utils/homeHelper'
const HomeVideo = () => {
  const { homeState, homeDispatch } = useHome()
  const allVideo = homeState?.homeVideo
  if (allVideo.length > 0) {
    var filteredVideos = getFilteredVideo(allVideo, homeState?.filterBy)
  }
  console.log(filteredVideos)
  return (
    <div>
      {filteredVideos?.length === 0 ? (
        <h2>no vi found</h2>
      ) : (
        <div>
          {filteredVideos?.map((video , index) => {
            const {
              avatar,
              categoryName,
              description,
              creator,
              _id,
              title
            } = video
            return (
              <div key={index}>
                <h1>{categoryName}</h1>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HomeVideo
