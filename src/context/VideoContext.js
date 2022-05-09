import { createContext, useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

import { getHistory } from '../actions/historyAction'
import { VideoReducer } from '../reducers'
const initialState = {
  loading: false,
  error: null,
  watchedHistory: [],
  likes: [],
  watchLater: []
}
const VideoContext = createContext(initialState)

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(VideoReducer, initialState)
  const {
    authState: { token }
  } = useAuth()
  useEffect(() => {
    token && getHistory(token, videoDispatch)
  }, [token])

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  )
}
const useVideo = () => useContext(VideoContext)
export { VideoProvider, useVideo }
