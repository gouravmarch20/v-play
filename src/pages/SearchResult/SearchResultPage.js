import React from 'react'
import { useLocation } from 'react-router-dom'
import { useHome } from '../../context/HomeContext'
import { useNavigate } from 'react-router-dom'
import { generateThumbnail } from '../../utils/homeUtils'
import { useVideo } from '../../context/VideoContext'
import { useAuth } from '../../context/AuthContext'
import NavLeft from '../../components/navbar/nav-left/NavLeft'

import { addToHistory } from '../../actions/historyAction'
import { getVideoDetails } from '../../utils/videoUtils'

export const SearchResultPage = () => {
  const {
    authState: { token }
  } = useAuth()
  const { homeState } = useHome()
  const { videoDispatch } = useVideo()

  const {
    homeState: { homeVideo }
  } = useHome()
  const navigate = useNavigate()

  const query = new URLSearchParams(useLocation().search)
  const searchTerm = query.get('search_query')
  const searchResult = homeVideo?.filter(video =>
    video.title.toLowerCase().includes(searchTerm?.toLowerCase())
  )

  const allVideo = homeState?.homeVideo

  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='container-wrapper'>
        <div>
          {searchResult?.length === 0 ? (
            <h2 className='heading mt-10'>no video found seach again </h2>
          ) : (
            <>
              <div className='history-header'>
                <h2 className='history-header-h2 '>Search Results</h2>
              </div>
              <div className='home-video-flex'>
                {searchResult?.map((video, index) => {
                  const {
                    avatar,
                    uploadedOn,
                    views,
                    channelName,
                    _id,
                    title
                  } = video
                  return (
                    <>
                      <div key={index} className='home-video-card'>
                        <img
                          onClick={() => {
                            const tempVideoToAdd = getVideoDetails(
                              allVideo,
                              _id
                            )
                            addToHistory(tempVideoToAdd, token, videoDispatch)

                            navigate(`/watch/${_id}`)
                          }}
                          src={generateThumbnail(_id)}
                          alt='the video deleted form youtube server'
                          className='thumbnail-responsive'
                        />

                        <div className='home-video-info'>
                          <img
                            className='home-avatar-round'
                            src={avatar}
                            alt='no'
                          />
                          <div className='home-video-miniDescription'>
                            <p className='text-grey-700 text-xsm'>
                              {title.substring(0, 40)}{' '}
                              <span>{title.length >= 50 ? '...' : ''}</span>
                            </p>{' '}
                            <p className='text-grey-600'>{channelName}</p>
                            <div>
                              <p className='text-grey-500'>
                                {views} <span>views</span>
                              </p>
                              <p className='text-grey-400'>{uploadedOn}</p>
                            </div>
                          </div>
                        </div>
                      </div>{' '}
                    </>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
