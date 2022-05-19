import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { usePlaylist } from '../../context/PlaylistContext'
import { useHome } from '../../context/HomeContext'
import { generateThumbnail } from '../../utils/homeUtils'
import { deleteVideoFromPlaylist } from '../../actions/playlistAction'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const PlaylistVideo = () => {
  const {
    playlistState: { playlists },
    playlistDispatch
  } = usePlaylist()

  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  const { homeState, homeDispatch } = useHome()
  const allVideo = homeState?.homeVideo
  const { playlistId } = useParams()
  const playlistAddedVideos = (playlists, playlistId) => {
    const playlistVideos = playlists?.find(
      playlist => playlist._id === playlistId
    )

    const { videos } = playlistVideos || []
    return videos
  }

  const [playlistVideo, setPlaylistVideo] = useState([])
  useEffect(() => {
    setPlaylistVideo(playlistAddedVideos(playlists, playlistId))
  }, [playlistId, playlists])
  return (
    <>
      {token && isLoggedIn ? (
        <div>
          {playlistVideo?.length >= 1 ? (
            <div>
              <>
                <div className='history-card-warper'>
                  {playlistVideo?.map(video => {
                    const {
                      avatar,
                      channelName,
                      description,
                      id,
                      title,
                      uploadedOn,
                      views,
                      _id
                    } = video
                    return (
                      <div key={_id} className='history-card'>
                        <img
                          src={generateThumbnail(_id)}
                          alt='the video deleted form youtube server'
                          className='thumbnail-responsive'
                        />
                        <div className='info'>
                          <div className='info-left'>
                            <p>{title.substring(0, 30)}</p>
                          </div>
                          <div className='info-right'>
                            <i
                              className='history-delete-btn'
                              onClick={() => {
                                deleteVideoFromPlaylist(
                                  playlistId,
                                  _id,
                                  'token',
                                  playlistDispatch
                                )
                              }}
                            >
                              <MdDeleteForever />
                            </i>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            </div>
          ) : (
            <div>
              <h3>asf</h3>
              <h3>asf</h3>
              <h3>asf</h3>
              <h3>asf</h3>
            </div>
          )}
        </div>
      ) : (
        <div className='auth-login-align'>
          <h2 className='login-message-heading4'>Please login first </h2>
          <br />
          <div className='login-cta'>
            <Link to='/signin'>
              <button className='ctn-btn'>Login Now</button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default PlaylistVideo
