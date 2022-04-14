import React from 'react'
import './playVideo.css'
const PlayVideo = ({ videoId }) => {
  return (
    <div>
      <iframe
     
        className='playVideo-iframe'
        src={`https://www.youtube.com/embed/${videoId} `}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    
     
    </div>
  )
}

export default PlayVideo
