import React from 'react'
import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/watchVideo/PlayVideo'
import TakeNote from '../../components/watchVideo/TakeNote'
import VidoeDetail from '../../components/watchVideo/VidoeDetail'
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
        <VidoeDetail videoId={videoId} />
      </div>
    </>
  )
}
