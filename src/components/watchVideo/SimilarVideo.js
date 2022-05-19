import React, { useEffect } from 'react'
import { getVideoDetails } from '../../utils/videoUtils'
import { useHome } from '../../context/HomeContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { generateThumbnail } from '../../utils/homeUtils'
import './css/similarVideo.css'
import { useVideo } from '../../context/VideoContext'
import { useAuth } from '../../context/AuthContext'
import { addToHistory } from '../../actions/historyAction'

const SimilarVideo = ({ videoId }) => {
  const navigate = useNavigate()

  const {
    homeState: { homeVideo }
  } = useHome()
  const { videoDispatch } = useVideo()
  const {
    authState: { token }
  } = useAuth()

  // TODO: OPTIMISE BY SETTING IN CONTEXT --> VIDEO_ DETAIL PAGE MAI CATEGORY NAME STATE
  const videoDetail = getVideoDetails(homeVideo, videoId)
  const { categoryName, _id } = videoDetail || {}
  const data = homeVideo.reduce((acc, curr) => {
    if (curr.categoryName === categoryName && curr._id !== _id) {
      acc.push(curr)
    }

    return acc
  }, [])

  return (
    <>
      <h2 className='text-center mt-10 heading '>Similar Video</h2>

      {
        <div>
          {data?.length === 0 ? (
            <h2 className='heading'>no video found</h2>
          ) : (
            <div className='home-video-flex'>
              {data?.map((video, index) => {
                const {
                  avatar,
                  categoryName,
                  description,
                  uploadedOn,
                  views,
                  channelName,
                  _id,
                  title
                } = video
                return (
                  <div
                    key={index}
                    className='video-card-similarVideo'
                    onClick={() => {
                      navigate(`/watch/${_id}`)
                      const tempVideoToAdd = getVideoDetails(homeVideo, _id)
                      addToHistory(tempVideoToAdd, token, videoDispatch)
                    }}
                  >
                    {/* <div> */}
                    <img
                      src={generateThumbnail(_id)}
                      alt='the video deleted form youtube server'
                      className='similar-video-thumbnail'
                    />
                    {/* </div> */}

                    <div className='home-video-info'>
                      <div className='home-video-miniDescription'>
                        <p className='content'>
                          {title.substring(0, 40)}{' '}
                          <span>{title.length >= 50 ? '...' : ''}</span>
                        </p>{' '}
                        <p className=' bold-900 text-center mb-10'>
                          <span className='content'>by : </span>
                          {channelName}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <hr className='divider-b-10' />
        </div>
      }
    </>
  )
}

export default SimilarVideo
