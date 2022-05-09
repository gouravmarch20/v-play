import React from 'react'
import { useHome } from '../../context/HomeContext'
import { useVideo } from '../../context/VideoContext'
import { getFilteredVideo, generateThumbnail } from '../../utils/homeUtils'
import { getVideoDetails } from '../../utils/videoUtils'
import { SiCoronarenderer } from 'react-icons/si'
import './homeVideo.css'
import { Link } from 'react-router-dom'
import { addToHistory } from '../../actions/historyAction'
import { useAuth } from "../../context/AuthContext";

const HomeVideo = () => {
  const {
    authState: { token }
  } = useAuth()
  const { homeState, homeDispatch } = useHome()
  const { videoDispatch } = useVideo()

  const allVideo = homeState?.homeVideo
  if (allVideo.length > 0) {
    var filteredVideos = getFilteredVideo(allVideo, homeState?.filterBy)
  }
  return (
    <div>
      {filteredVideos?.length === 0 ? (
        <h2>no vi found</h2>
      ) : (
        <div className='home-video-flex'>
          {filteredVideos?.map((video, index) => {
            const {
              avatar,
              categoryName,
              description,
              uploadedOn,
              views,
              channelName,
              _id,
              title
            } = video
            return (
              <div key={index} className='home-video-card'>
                <Link
                  to={`watch/${_id}`}
                  onClick={() => {
                    // TODO: ADD ALREADY ADDED CASE
                    const tempVideoToAdd = getVideoDetails(allVideo, _id)
                    addToHistory(tempVideoToAdd, token, videoDispatch)
                  }}
                >
                  <img
                    src={generateThumbnail(_id)}
                    alt='the video deleted form youtube server'
                    className='thumbnail-responsive'
                  />
                </Link>

                <div className='home-video-info'>
                  <img className='avatar-round' src={avatar} alt='no' />
                  <div className='home-video-miniDescription'>
                    <p>{title.substring(0, 30)}</p>
                    <p>{channelName}</p>
                    <div>
                      <p>
                        {views} <span>views</span>
                      </p>
                      <p>{uploadedOn}</p>
                    </div>
                  </div>
                  <div className='home-video-quickAction'>
                    <SiCoronarenderer />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HomeVideo
