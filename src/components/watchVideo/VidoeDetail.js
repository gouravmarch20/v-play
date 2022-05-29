import React, { useState } from 'react'
import './videoDetail.css'
import { getVideoDetails } from '../../utils/videoUtils'
import { useHome } from '../../context/HomeContext'
import { useAuth } from '../../context/AuthContext'
import { useVideo } from '../../context/VideoContext'
import { usePlaylist } from '../../context/PlaylistContext'
import PlaylistModal from '../../components/playlist/PlaylistModal'
import {
  addToWatchLater,
  removeFromWatchLater
} from '../../actions/watchLaterAction'
import { addPlayist } from '../../actions/playlistAction'
import { addLike, removeLike } from '../../actions/likeAction'
import {
  MdThumbUp,
  MdOutlineThumbUpAlt,
  MdPlaylistAdd,
  MdOutlineWatchLater,
  MdWatchLater
} from 'react-icons/md'

const VidoeDetail = ({ videoId }) => {
  const [modal, setModal] = useState(false)
  const {
    playlistDispatch
    // playlistState: { playlists }
  } = usePlaylist()
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
      <div className='videoDetail-short '>
        <p className='content text-md'>{title}</p>
        <p className='videoDetail-action-btn'>
          <span className='views'>Views - {views}</span>
          <div className='upload-date mt-10'>{uploadedOn}</div>
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
        {modal && (
          <PlaylistModal
            videoDetail={videoDetail}
            videoId={videoId}
            onClose={() => {
              setModal(false)
            }}
            onAddClick={playlistName =>
              addPlayist(playlistName, token, playlistDispatch)
            }
          ></PlaylistModal>
        )}
        <>
          <i className='icon' onClick={() => setModal(true)}>
            <MdPlaylistAdd />
          </i>
        </>
      </div>

      <div className='channel-info'>
        <img className='img-round' src={avatar} alt='' />
        <p className='channel-name'>{channelName}</p>

        <p className='video-description'>{description}</p>
      </div>
    </div>
  )
}

export default VidoeDetail
