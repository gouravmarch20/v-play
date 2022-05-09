import React from 'react'
import WatchLaterCard from '../../components/card/WatchLaterCard'
import NavLeft from '../../components/navbar/nav-left/NavLeft'

export const WatchLaterPage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <WatchLaterCard />
    </div>
  )
}
