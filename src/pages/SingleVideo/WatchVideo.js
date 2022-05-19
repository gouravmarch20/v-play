import React from 'react'
import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/watchVideo/PlayVideo'
import TakeNote from '../../components/watchVideo/TakeNote'
import VidoeDetail from '../../components/watchVideo/VidoeDetail'
import SimilarVideo from '../../components/watchVideo/SimilarVideo'

import './watchVideo.css'
export const WatchVideo = () => {
  const { videoId } = useParams()
  return (
    <>
      <div className='watchVideo'>
        <PlayVideo videoId={videoId} />
        <TakeNote />
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
  )
}
