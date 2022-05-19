import React from 'react'
import HistoryCard from '../../components/card/HistoryCard'
import NavLeft from '../../components/navbar/nav-left/NavLeft'

export const HistoryPage = () => {

  return (
    <>
  
      <div className='navbarLeft-container-wrapper'>
        <div className='nav-left'>
          <NavLeft />
        </div>

        <HistoryCard />
      </div>
    </>
  )
}
