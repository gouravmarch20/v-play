import React, { useState } from 'react'
import './NavHeader.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { MdDarkMode, MdOutlineFlashlightOn } from 'react-icons/md'
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
        // backgroundColor: `${currectTheme.backgroundColor}`,
        // color: `${currectTheme.textColor}`
      }}
    >
      <nav className='navbar-warpper'>
        <div className='navbar-left'>
          <NavLink
            to='/'
            className='navbar-link'

            // className={({ isActive }) =>
            //   isActive ? 'navbar-link-active' : 'navbar-link'
            // }
          >
            V-player
          </NavLink>
        </div>

        <div className='navbar-center'>
          <input className='navbar-search' type='search' name='' id='' />
          <button className='navbar-search-btn'>search</button>
        </div>
        <div className='navbar-right'>
          {/* TODO: THEME TOGGLER */}
          {/* <div>
            {themeState.themeMode == 'light' ? (
              <div
                className='nav-theme-link'
                onClick={() =>
                  themeDispatch({
                    type: 'LIGHT_MODE',
                    payload: 'dark'
                  })
                }
              >
                <MdDarkMode />
              </div>
            ) : (
              <div
                className='nav-theme-link'
                onClick={() =>
                  themeDispatch({
                    type: 'LIGHT_MODE',
                    payload: 'light'
                  })
                }
              >
                <MdOutlineFlashlightOn />
              </div>
            )}
          </div> */}

          {!isLoggedIn && (
            <NavLink
              to='/signup'
              className='navbar-link'
              // className={({ isActive }) =>
              //   isActive ? 'navbar-link-active' : 'navbar-link'
              // }
            >
              <button className='btn-auth'>Signup</button>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              to='/signin'
              className='navbar-link'

              // className={({ isActive }) =>
              //   isActive ? 'navbar-link-active' : 'navbar-link'
              // }
            >
              <button className='btn-auth'>SignIn</button>
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
                      Welcome to v - player ❤️
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
