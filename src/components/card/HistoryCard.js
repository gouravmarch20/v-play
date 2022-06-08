import React from 'react'
import { useVideo } from '../../context/VideoContext'
import { generateThumbnail } from '../../utils/homeUtils'
import { Link, useNavigate } from 'react-router-dom'

import { MdDeleteForever } from 'react-icons/md'
import { removeFromHistory, clearAllHistory } from '../../actions/historyAction'
import { useAuth } from '../../context/AuthContext'

import './css/historyCard.css'
const HistoryCard = () => {
  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  const {
    videoState: { watchedHistory },
    videoDispatch
  } = useVideo()
  let navigate = useNavigate()

  return (
    <>
      {token && isLoggedIn ? (
        <div className=' '>
          {watchedHistory.length === 0 ? (
            <>
              <div className='flex-align-center'>
                <h1 className='heading '> not watched any video</h1>
              </div>
            </>
          ) : (
            <>
              <div className='history-header'>
                <h2 className='history-header-h2'>Your watched history</h2>
                <button
                  className=' btn btn-info btn-align-end'
                  onClick={() => {
                    clearAllHistory(token, videoDispatch)
                  }}
                >
                  Clear All
                </button>
              </div>

              <div className='history-card-warper'>
                {watchedHistory?.map(watchedVideo => {
                  const { _id, title } = watchedVideo
                  return (
                    <div key={_id} className='history-card'>
                      <img
                        src={generateThumbnail(_id)}
                        onClick={() => {
                          navigate(`/watch/${_id}`)
                        }}
                        alt='the video deleted form youtube server'
                        className='thumbnail-responsive '
                      />
                      <div className='info'>
                        <div className='info-left'>
                          <p className='content '>
                            {title.substring(0, 38)}
                            <span>{title.length >= 38 ? '...' : ''}</span>
                          </p>
                        </div>
                        <div className='info-right'>
                          <button
                            className='btn btn-danger'
                            onClick={() => {
                              removeFromHistory(_id, token, videoDispatch)
                            }}
                          >
                            <MdDeleteForever />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}{' '}
              </div>
            </>
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

export default HistoryCard
