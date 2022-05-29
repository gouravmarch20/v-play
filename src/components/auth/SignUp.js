import React, { useState } from 'react'
import './css/signup.css'
import { createUser } from '../../actions/authAction'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'

const SignUp = () => {
  const [userSignUpData, setUserSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const {
    // state: { error },
    signupHandler
  } = useAuth()

  const { firstName, lastName, email, password } = userSignUpData

  const handleSubmit = e => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      password !== ''
    ) {
      signupHandler(firstName, lastName, email, password)
    }
  }

  return (
    <div className='signup'>
      <h2 className='text-center'>Registration</h2>

      <form className='signup-form' onSubmit={e => e.preventDefault()}>
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
            onChange={e =>
              setUserSignUpData({
                ...userSignUpData,
                firstName: e.target.value
              })
            }
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
            onChange={e =>
              setUserSignUpData({ ...userSignUpData, lastName: e.target.value })
            }
            value={userSignUpData.lastName}
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
            value={userSignUpData.email}
            onChange={e =>
              setUserSignUpData({ ...userSignUpData, email: e.target.value })
            }
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
            value={userSignUpData.password}
            onChange={e =>
              setUserSignUpData({ ...userSignUpData, password: e.target.value })
            }
            required
          />
        </div>
        <button type='submit' className='signup-btn' onClick={handleSubmit}>
          Register Now
        </button>
        <p className='signin-btn'>
          Already have an account? <Link to='/signin'>Login now</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp
