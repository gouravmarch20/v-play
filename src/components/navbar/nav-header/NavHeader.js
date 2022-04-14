import React from 'react'
import './NavHeader.css'
import { NavLink } from 'react-router-dom'

const NavHeader = () => {
  return (
    <div>
      <header className='header'>
        <img src='' alt='logo' className='logo' />

        <nav className='navbar'>
          <ul className='navbar-list'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'navbar-link-active' : 'navbar-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/signup'
                className={({ isActive }) =>
                  isActive ? 'navbar-link-active' : 'navbar-link'
                }
              >
                Signup
              </NavLink>
            </li>
            <li>
              <a className='navbar-link' href='#'>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavHeader
