import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { usePlaylist } from '../../context/PlaylistContext'
import { removePlaylist } from '../../actions/playlistAction'
import { MdDeleteForever } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Playlist = () => {
  let navigate = useNavigate()

  const {
    playlistState: { playlists },
    playlistDispatch
  } = usePlaylist()
  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  return (
    <>
      {token && isLoggedIn ? (
        <div className='history-card-warper'>
          {playlists.map(playlist => {
            const { title, _id } = playlist

            return (
              <div
                className='history-card'
                key={_id}
                onClick={() => navigate(`/playlists/${_id}`)}
              >
                <h1>{title}</h1>
                {/* <img
                src={generateThumbnail(_id)}
                alt='the video deleted form youtube server'
                className='thumbnail-responsive'
              /> */}

                <div className='info'>
                  {/* <div className='info-left'>
                  <p>{title.substring(0, 30)}</p>
                </div> */}
                  <div className='info-right'>
                    <i
                      className='history-delete-btn'
                      onClick={() => {
                        removePlaylist(_id, token, playlistDispatch)
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

export default Playlist
