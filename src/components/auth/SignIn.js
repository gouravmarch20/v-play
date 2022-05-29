import React, { useState } from 'react'
import './css/signin.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const SignIn = () => {
  const {
    authState: { error },
    loginHandler
  } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitLoginData = () => {
    if (email && password) {
      loginHandler(email, password)
    }
  }
  const submitLoginWithCredentials = () => {
    setEmail('gourav@gmail.com')
    setPassword('gourav123')
    loginHandler('gourav@gmail.com', 'gourav123')
  }
  return (
    <div className='signin'>
      <h2>SignIn</h2>
      <form className='signup-form' onSubmit={e => e.preventDefault()}>
        <div className='input-box'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            className='input-style'
            type='email'
            placeholder='Enter your email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
            name='password'
            id='password'
            value={password}
          />
        </div>

        <div className=''>
          <button className='signup-btn' onClick={submitLoginData}>
            Login Now
          </button>
        </div>
        <div className=''>
          <button
            className='signup-btn sign-test'
            onClick={submitLoginWithCredentials}
          >
            {' '}
            Test the app{' '}
          </button>
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
