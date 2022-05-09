import React, { useContext } from 'react'
import './NavHeader.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { MdDarkMode, MdOutlineFlashlightOn } from 'react-icons/md'

const NavHeader = () => {
  const {
    authState: { isLoggedIn },
    logoutHandler
  } = useAuth()
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
            <NavLink
              to=''
              className='navbar-link 
'
            >
              <button className='btn-auth' onClick={logoutHandler}>
                Signout
              </button>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  )
}

export default NavHeader
