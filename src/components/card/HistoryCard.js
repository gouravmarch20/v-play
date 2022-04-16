import React, { useState } from 'react'
import { useVideo } from '../../context/VideoContext'
import { Link } from 'react-router-dom'
import { generateThumbnail } from '../../utils/homeUtils'
import { MdDeleteForever } from 'react-icons/md'
import { removeFromHistory } from '../../actions/historyAction'
import './css/historyCard.css'
const HistoryCard = () => {
  const {
    videoState: { watchedHistory },
    videoDispatch
  } = useVideo()

console.log(watchedHistory);
  return (
    <>
      <div className='home-video-card history-card'>
        {watchedHistory.length === 0 ? (
          <h1>No watched history</h1>
        ) : (
          <>
            {watchedHistory?.map(watchedVideo => {
              const { _id, title } = watchedVideo

              return (
                <div key={_id}>
                  {/* <Link> */}
                  <img
                    src={generateThumbnail(_id)}
                    alt='the video deleted form youtube server'
                    className='thumbnail-responsive'
                  />
                  {/* </Link> */}
                  <div className='info'>
                    <div className='info-left'>
                      <p>{title.substring(0, 30)}</p>
                    </div>
                    <div className='info-right'>
                      <i
                        className='history-delete-btn'
                        onClick={() => {
                          removeFromHistory(_id , videoDispatch)
                        
                        }}
                      >
                        <MdDeleteForever />
                      </i>
                    </div>
                  </div>
                </div>
              )
            })}

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
