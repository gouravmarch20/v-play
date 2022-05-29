import React, { useState } from 'react'
import './NavHeader.css'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { MdDarkMode, MdOutlineFlashlightOn } from 'react-icons/md'
import SearchVideo from './SearchVideo'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'

const NavHeader = () => {
  // TODO: LOGOUT OPTIMISE
  const {
    authState: { userInfo, isLoggedIn },
    logoutHandler
  } = useAuth()
  const [dropdown, setDropdown] = useState(false)
  const toggleDropdown = () => setDropdown(prev => !prev)
  const openDropdown = () => setDropdown(true)
  const closeDropdown = () => setDropdown(false)
  return (
    <div
      className='navbar'
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: 1
      }}
    >
      <nav className='navbar-warpper'>
        <div className='navbar-left'>
          <NavLink to='/' className='navbar-link'>
            V-player
          </NavLink>
        </div>

        <div className='navbar-center'>
          <SearchVideo />
        </div>
        <div className='navbar-right'>
          {!isLoggedIn && (
            <NavLink to='/signin' className='navbar-link'>
              <button className='btn btn-danger p-10'>SignIn</button>
            </NavLink>
          )}

          {!isLoggedIn && (
            <NavLink to='/signup' className='navbar-link'>
              <button className='btn btn-danger-light'>Signup</button>
            </NavLink>
          )}

          {isLoggedIn && (
            <div
              className='userinfo-signout-toggle'
              onClick={toggleDropdown}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <div>
                <i className='avatar-icon'>
                  {' '}
                  <FaUserCircle />
                </i>
                {userInfo?.user?.firstName}{' '}
                <span> {!dropdown ? <FiChevronDown /> : <FiChevronUp />}</span>
              </div>

              {dropdown ? (
                <div className='dropdown-box-container'>
                  <div className='dropdown-box-flex'>
                    <p className='text-sm bold-700 text-center text-black mt-10 mb-10'>
                      Welcome to v - player
                    </p>
                    <button
                      className='btn-danger btn-signout'
                      onClick={logoutHandler}
                    >
                      Signout
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default NavHeader
