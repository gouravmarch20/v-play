import React from 'react'
import { generateThumbnail } from '../../utils/homeUtils'
import { removeFromWatchLater } from '../../actions/watchLaterAction'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

import { useVideo } from '../../context/VideoContext'
import { MdDeleteForever } from 'react-icons/md'
const WatchLaterCard = () => {
  const {
    videoState: { watchLater },
    videoDispatch
  } = useVideo()
  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  return (
    <>
      {token && isLoggedIn ? (
        <div>
          {watchLater.length === 0 ? (
            <>
              <div className='flex-align-center'>
                <h1 className='heading '> not add any video</h1>
              </div>
            </>
          ) : (
            <div className='history-card-warper'>
              {watchLater.map(d => {
                const { _id, avatar, categoryName, title, description } = d

                return (
                  <div key={_id} className='history-card'>
                    <img
                      src={generateThumbnail(_id)}
                      alt='the video deleted form youtube server'
                      className='thumbnail-responsive'
                    />

                    <div className='info'>
                      <div className='info-left'>
                        <p className='content'>
                          {title.substring(0, 40)}{' '}
                          <span>{title.length >= 50 ? '...' : ''}</span>
                        </p>
                      </div>
                      <div className='info-right'>
                        <button
                          className='btn btn-danger'
                          onClick={() => {
                            removeFromWatchLater(_id, token, videoDispatch)
                          }}
                        >
                          <MdDeleteForever />
                        </button>
                      </div>
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
              <button class='ctn-btn'>Login Now</button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default WatchLaterCard
