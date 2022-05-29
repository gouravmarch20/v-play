import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/watchVideo/PlayVideo'
// import TakeNote from '../../components/watchVideo/TakeNote'
import VidoeDetail from '../../components/watchVideo/VidoeDetail'
import SimilarVideo from '../../components/watchVideo/SimilarVideo'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

import './watchVideo.css'
export const WatchVideo = () => {
  const {
    authState: {  isLoggedIn }
  } = useAuth()
  const { videoId } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [videoId])
  return (
    <>
      {isLoggedIn ? (
        <>
          <div className='watchVideo'>
            <PlayVideo videoId={videoId} />
            {/* <TakeNote /> */}
            
          </div>
          <div className='watchVideo'>
            <section className='video-detail'>
              <VidoeDetail videoId={videoId} />
            </section>
            <section className='similar-video'>
              <SimilarVideo videoId={videoId} />
            </section>
          </div>
        </>
      ) : (
        <div className='align-auth-center'>
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
