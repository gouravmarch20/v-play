import React, { useState } from 'react'
import './css/signup.css'
import { createUser } from '../../actions/authAction'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignUp = () => {

  const [userSignUpData, setUserSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const handleInput = e => {
    const tempName = e.target.name
    const tempvalue = e.target.value
    setUserSignUpData({ ...userSignUpData, [tempName]: tempvalue })
  }
  const handleSubmit = e => {
    e.preventDefault()
    createUser({ ...userSignUpData })
  }

  return (
    <div className='signup'>
      <h2>Registration</h2>
      <button>
    
      </button>
      <form className='signup-form'>
        <div className='input-box'>
          <label htmlFor='firstName' className='label'>
            {' '}
            FirstName
          </label>

          <input
            type='text'
            className='input-style'
            id='firstName'
            name='firstName'
            placeholder='Enter your firstName'
            value={userSignUpData.firstName}
            required
            onChange={e => handleInput(e)}
          />
        </div>
        <div className='input-box'>
          <label htmlFor='lastName' className='label'>
            {' '}
            LastName
          </label>

          <input
            type='text'
            className='input-style'
            id='lastName'
            name='lastName'
            placeholder='Enter your lastName'
            onChange={e => handleInput(e)}
            required
          />
        </div>
        <div className='input-box'>
          <label htmlFor='email' className='label'>
            {' '}
            Email
          </label>
          <input
            className='input-style'
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            required
            onChange={e => handleInput(e)}
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
            name='password'
            id='password'
            placeholder='Create password'
            onChange={e => handleInput(e)}
            required
          />
        </div>

        <div className=''>
          <button className='signup-btn' onClick={handleSubmit}>
            Register Now
          </button>
        </div>
        <div className=''>
          <p className='signin-btn'>
            Already have an account? <Link to='/signin'>Login now</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
