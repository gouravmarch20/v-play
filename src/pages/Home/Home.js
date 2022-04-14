import React from 'react'
import HomeChip from '../../components/home/HomeChip'
import HomeVideo from '../../components/home/HomeVideo'
import NavLeft from '../../components/navbar/nav-left/NavLeft'
import './Home.css'

const Home = () => {

  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='container-wrapper'>
        <HomeChip />
        <HomeVideo />
      </div>
    </div>
  )
}

export default Home
