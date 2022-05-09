import React from 'react'
import NavLeft from '../../components/navbar/nav-left/NavLeft'
import Playlist from '../../components/playlist/Playlist'
export const PlaylistPage = () => {
  return (
    <>
      {' '}
      <div className='navbarLeft-container-wrapper'>
        <div className='nav-left'>
          <NavLeft />
        </div>
        <Playlist />
      </div>
    </>
  )
}
