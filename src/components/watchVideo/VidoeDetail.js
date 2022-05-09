import React from 'react'
import './videoDetail.css'
import { getVideoDetails } from '../../utils/videoUtils'
import { useHome } from '../../context/HomeContext'
import { useAuth } from '../../context/AuthContext'
import { useVideo } from '../../context/VideoContext'
import {
  addToWatchLater,
  removeFromWatchLater
} from '../../actions/watchLaterAction'
import { addLike, removeLike } from '../../actions/likeAction'
import {
  MdThumbUp,
  MdOutlineThumbUpAlt,
  MdPlaylistAdd,
  MdPlaylistAddCheck,
  MdOutlineWatchLater,
  MdWatchLater
} from 'react-icons/md'

const VidoeDetail = ({ videoId }) => {
  // const [currentVideo, setCurrentVideo] = useState({})
  const {
    homeState: { homeVideo }
  } = useHome()

  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  const {
    videoDispatch,
    videoState: { likes, watchLater }
  } = useVideo()
  const videoDetail = getVideoDetails(homeVideo, videoId)
  const { _id, uploadedOn, channelName, avatar, views, description, title } =
    videoDetail || {}
  const isVideoAlreadyLiked = likes?.find(likedVideo => likedVideo._id === _id)
  const isVideoAddToWatchLater = watchLater?.find(
    watchVideo => watchVideo._id === _id
  )

  return (
    <div className='videoDetail'>
      <div className='videoDetail-short'>
        <p className='title'>{title}</p>
        <p className='videoDetail-action-btn'>
          <p className='views'>Views - {views}</p>
          <p className='upload-date'>{uploadedOn}</p>
        </p>

        <>
          {isVideoAddToWatchLater ? (
            <i
              className='icon'
              onClick={() => {
                removeFromWatchLater(_id, token, videoDispatch)
              }}
            >
              <MdWatchLater />
            </i>
          ) : (
            <i
              className='icon '
              onClick={() => {
                addToWatchLater(videoDetail, token, videoDispatch)
              }}
            >
              <MdOutlineWatchLater />
            </i>
          )}
        </>
        <div>
          <i className='icon'>
            <MdPlaylistAdd />
          </i>

          <>
            {isVideoAlreadyLiked ? (
              <i
                className='icon'
                onClick={() => {
                  removeLike(_id, token, videoDispatch)
                }}
              >
                <MdThumbUp />
              </i>
            ) : (
              <i
                className='icon'
                onClick={() => {
                  addLike(videoDetail, token, videoDispatch)
                }}
              >
                <MdOutlineThumbUpAlt />
              </i>
            )}
          </>
        </div>
      </div>

      <div className='videoDetail-s'>
        <div className='channel-info'>
          <img className='img-round' src={avatar} alt='' />
          <p className='channel-name'>{channelName}</p>
        </div>
        <div>
          <p className='video-description'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default VidoeDetail
