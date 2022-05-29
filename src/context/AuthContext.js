import { createContext, useContext, useReducer, useEffect } from 'react'
import { AuthReducer } from '../reducers'
import { useNavigate } from 'react-router-dom'
import { signupUser, loginUser } from '../actions/authAction'
import toast from 'react-hot-toast'

const initialState = {
  token: '',
  userInfo: null,
  isLoggedIn: false,
  error: ''
}

const AuthContext = createContext(initialState)

const AuthProvider = ({ children }) => {
  const getTokenFromLocalStorage = localStorage.getItem('token') || ''
  const getUserFromLocalStorage =
    JSON.parse(localStorage.getItem('user')) || null
  const [authState, authDispatch] = useReducer(AuthReducer, initialState)
  const navigate = useNavigate()

  useEffect(() => {
    if (getTokenFromLocalStorage !== '' && getUserFromLocalStorage !== '') {
      authDispatch({
        type: 'SAVE_TOKEN',
        payload: getTokenFromLocalStorage
      })
      authDispatch({
        type: 'SAVE_USER_INFO',
        payload: getUserFromLocalStorage
      })
    }
  }, [authState.token])

  const signupHandler = async (firstName, lastName, email, password) => {
    const toastId = toast.loading('Creating your account')
    try {
      const { status } = await signupUser(firstName, lastName, email, password)
      if (status === 200 || status === 201) {
        toast.success('Account created successfully!', {
          id: toastId
        })
        navigate('/signin')
      }
    } catch (error) {
      toast.error('Some error occured. Try Again.', {
        id: toastId
      })
      authDispatch({ type: 'AUTH_ERROR', payload: error.response })
    }
  }

  const loginHandler = async (email, password) => {
    const toastId = toast.loading('Logging in...')
    try {
      const {
        data: { encodedToken, foundUser },
        status
      } = await loginUser(email, password)

      if (status === 200) {
        toast.success(`Welcome, ${foundUser.firstName}`, {
          id: toastId,
          icon: '👋'
        })
        localStorage.setItem('token', encodedToken)
        localStorage.setItem('user', JSON.stringify({ user: foundUser }))
        authDispatch({ type: 'SAVE_TOKEN', payload: encodedToken })
        authDispatch({
          type: 'SAVE_USER_INFO',
          payload: foundUser
        })
        navigate(-1)
      }
    } catch (error) {
      toast.error('Some error occured. Try Again.', {
        id: toastId
      })
      authDispatch({ type: 'AUTH_ERROR', payload: error.response })
    }
  }

  const logoutHandler = () => {
    const toastId = toast.loading('processing logout ')
    toast.success('You have logged out successfully', {
      id: toastId
    })
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    authDispatch({ type: 'LOG_OUT' })
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        signupHandler,
        loginHandler,
        logoutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
