import React, { useState } from 'react'
import { useVideo } from '../../context/VideoContext'
import { generateThumbnail } from '../../utils/homeUtils'
import { MdDeleteForever } from 'react-icons/md'
import { removeFromHistory, clearAllHistory } from '../../actions/historyAction'
import { useAuth } from '../../context/AuthContext'
// TODO: CLEAR HISTORY ALL FEATURE
import './css/historyCard.css'
const HistoryCard = () => {
  const {
    authState: { token }
  } = useAuth()
  const {
    videoState: { watchedHistory },
    videoDispatch
  } = useVideo()

  return (
    <>
      <div className=' history-card-warpe'>
        {watchedHistory.length === 0 ? (
          <>
            <h1>No watched history</h1>
          </>
        ) : (
          <>
            <div className='history-header'>
              <h2 className='history-heading'>history</h2>
              <button
                className='cta align-end'
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
                            removeFromHistory(_id, token, videoDispatch)
                          }}
                        >
                          <MdDeleteForever />
                        </i>
                      </div>
                    </div>
                  </div>
                )
              })}{' '}
            </div>

            {/* <div className='home-video-miniDescription'>
              <p>{title}</p>
              <p>{channelName}</p>
            </div>
            <div>
              <p>views : {views}</p>
              <div className='home-video-quickAction'>
                <SiCoronarenderer />
              </div>
            </div> */}
          </>
        )}
      </div>
    </>
  )
}

export default HistoryCard
