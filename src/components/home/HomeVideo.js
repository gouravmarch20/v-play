import React from 'react'
import { Link } from 'react-router-dom'
import { useHome } from '../../context/HomeContext'
import { useVideo } from '../../context/VideoContext'
import { useAuth } from '../../context/AuthContext'
import { getFilteredVideo, generateThumbnail } from '../../utils/homeUtils'
import { getVideoDetails } from '../../utils/videoUtils'
import { addToHistory } from '../../actions/historyAction'

import './homeVideo.css'

const HomeVideo = () => {
  const {
    authState: { token }
  } = useAuth()
  const { homeState } = useHome()
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
                  <img className='home-avatar-round' src={avatar} alt='no' />
                  <div className='home-video-miniDescription'>
                    <p className='text-grey-700 text-xsm'>
                      {title.substring(0, 40)}{' '}
                      <span>{title.length >= 50 ? '...' : ''}</span>
                    </p>{' '}
                    <p className='text-grey-600'>{channelName}</p>
                    <div>
                      <p className='text-grey-500'>
                        {views} <span>views</span>
                      </p>
                      <p className='text-grey-400'>{uploadedOn}</p>
                    </div>
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
