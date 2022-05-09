import React from 'react'
import { generateThumbnail } from '../../utils/homeUtils'
import { addLike, removeLike } from '../../actions/likeAction'
import { useVideo } from '../../context/VideoContext'
import { useAuth } from '../../context/AuthContext'
import { MdDeleteForever } from 'react-icons/md'
const LikeCard = () => {
  const {
    videoState: { likes },
    videoDispatch
  } = useVideo()
  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  return (
    <>
      <div className='history-card-warper'>
        {likes.map(d => {
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
                  <p>{title.substring(0, 30)}</p>
                </div>
                <div className='info-right'>
                  <i
                    className='history-delete-btn'
                    onClick={() => {
                      removeLike(_id, token, videoDispatch)
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
  )
}

export default LikeCard
