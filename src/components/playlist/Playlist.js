import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { usePlaylist } from '../../context/PlaylistContext'
import { removePlaylist } from '../../actions/playlistAction'
import { MdDeleteForever } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './css/playlist.css'
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
        <div>
          {playlists.length === 0 ? (
            <>
              <div className='flex-align-column-center'>
                <h1 className='heading '> empty playist</h1>
                <div className='login-cta'>
                  <Link to='/'>
                    <button className='ctn-btn'>Watch Video </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className='flex-align-center-playlist-card'>
              {playlists.map(playlist => {
                const { title, _id, videos } = playlist

                return (
                  <div className='playlist-card cursor-pointer '>
                    <section
                      key={_id}
                      onClick={() => navigate(`/playlists/${_id}`)}
                      className='playlist-video-section'
                    >
                      <div className=''>
                        <p className='subheading '>
                          {' '}
                          <span className='content'>Playlist name - </span>{' '}
                          {title}
                        </p>
                        <p className='subheading'>
                          <span className='content '>Total Video Added -</span>{' '}
                          {videos.length}{' '}
                        </p>
                      </div>
                    </section>
                    <div className='bg-danger-light flex-center-single-item '>
                      <button
                        className='btn btn-danger p-1 cursor-pointer'
                        onClick={() => {
                          removePlaylist(_id, token, playlistDispatch)
                        }}
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                )
              })}
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

export default Playlist
