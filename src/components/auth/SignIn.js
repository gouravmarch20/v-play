import React, { useState } from 'react'
import './css/signin.css'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/authAction'

const SignIn = () => {
  const [signInData, setSignInData] = useState({})
  const handleInput = e => {
    const tempName = e.target.name
    const tempValue = e.target.value
    setSignInData({ ...signInData, [tempName]: tempValue })
  }
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(signInData)
    loginUser(signInData)
  }
  return (
    <div className='signin'>
      <h2>SignIn</h2>
      <form className='signup-form'>
        <div className='input-box'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            className='input-style'
            type='email'
            placeholder='Enter your email'
            name='email'
            id='email'
            onChange={e => handleInput(e)}
            required
          />
        </div>

        <div className='input-box'>
          <label htmlFor='password' className='label'>
            {' '}
            Password
          </label>

          <input
            className='input-style'
            type='password'
            placeholder=' password'
            required
            name='password'
            id='password'
            onChange={e => handleInput(e)}
          />
        </div>

        <div className=''>
          <button className='signup-btn' onClick={handleSubmit}>
            Login Now
          </button>
        </div>
        <div className=''>
          <button className='signup-btn sign-test'> Test the app </button>
        </div>
        <div className=''>
          <p className='signin-btn'>
            Don't have an account? <Link to='/signup'>Register Now</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignIn
