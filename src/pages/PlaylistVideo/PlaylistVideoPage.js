import React from 'react'
import PlaylistVideo from '../../components/playlistVideo/PlaylistVideo'
import NavLeft from '../../components/navbar/nav-left/NavLeft'

export const PlaylistVideoPage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />{' '}
      </div>
      <PlaylistVideo />
    </div>
  )
}
