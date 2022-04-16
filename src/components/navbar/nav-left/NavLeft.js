import React from 'react'
import './NavLeft.css'
import { FaBeer } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai'
import { HiTrendingUp } from 'react-icons/hi'
import { MdHome, MdWatchLater, MdOutlinePlaylistPlay } from 'react-icons/md'
import { FaHistory } from 'react-icons/fa'

const NavLeft = () => {
  return (
    <div className=''>
      <div className='navLeft-fixed'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link-sleep'
          }
        >
          <i className='navLeft-icon'>
            <MdHome />
          </i>
          <span className='navLeft-link-span'>Home</span>
        </NavLink>
        <hr />
        {/* <NavLink
          to='/trending'
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link-sleep'
          }
        >
          <i className='navLeft-icon'>
            <HiTrendingUp />
          </i>
          <span className='navLeft-link-span'>Trending</span>
        </NavLink> */}
        <hr />
        <NavLink
          to='/history'
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link-sleep'
          }
        >
          <i className='navLeft-icon'>
            <FaHistory />
          </i>
          <span className='navLeft-link-span'>History</span>
        </NavLink>
        <hr />
        <NavLink
          to='/liked'
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link-sleep'
          }
        >
          <i className='navLeft-icon'>
            <AiFillLike />
          </i>
          <span className='navLeft-link-span'>Liked</span>
        </NavLink>
        <hr />
        <NavLink
          to='/watch-later'
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link-sleep'
          }
        >
          <i className='navLeft-icon'>
            <MdWatchLater />
          </i>
          <span className='navLeft-link-span'>watch Later</span>
        </NavLink>
        <hr />
        <NavLink
          to='/playlist'
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link-sleep'
          }
        >
          <i className='navLeft-icon'>
            <MdOutlinePlaylistPlay />
          </i>
          <span className='navLeft-link-span'>playlist</span>
        </NavLink>
        <hr />
      </div>
    </div>
  )
}

export default NavLeft
