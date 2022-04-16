import React from 'react'
import './videoDetail.css'
import { getVideoDetails } from '../../utils/videoUtils'
import { useHome } from '../../context/HomeContext'
import {
  MdOutlineThumbUpAlt,
  MdPlaylistAdd,
  MdPlaylistAddCheck,
  MdOutlineWatchLater
} from 'react-icons/md'
const VidoeDetail = ({ videoId }) => {
  // const [currentVideo, setCurrentVideo] = useState({})
  const {
    homeState: { homeVideo }
  } = useHome()
  const videoDetail = getVideoDetails(homeVideo, videoId)
  const { uploadedOn, channelName, avatar, views, description, title } =
    videoDetail || {}
  return (
    <div className='videoDetail'>
      <div className='videoDetail-short'>
        <p className='title'>{title}</p>
        <p className='videoDetail-action-btn'>
          <p className='views'>Views - {views}</p>
          <p className='upload-date'>{uploadedOn}</p>
        </p>
        <div>
          <i className='icon '>
            <MdOutlineWatchLater />
          </i>
          <i className='icon'>
            <MdPlaylistAdd />
          </i>
          <i className='icon'>
            <MdOutlineThumbUpAlt />
          </i>
        </div>
      </div>

      <div className='videoDetail-s'>
        
        <div className='channel-info'>
          <img className='img-round' src={avatar} alt='' />
          <p className='channel-name'>{channelName}</p>
        </div>
        <div>
          <p className="video-description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default VidoeDetail
