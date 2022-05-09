import React from 'react'
import LikeCard from '../../components/card/LikeCard'
import NavLeft from '../../components/navbar/nav-left/NavLeft'

export const LikedPage = () => {
  return (
    <>
      {' '}
      <div className='navbarLeft-container-wrapper'>
        <div className='nav-left'>
          <NavLeft />
        </div>
        <LikeCard />
      </div>
    </>
  )
}
