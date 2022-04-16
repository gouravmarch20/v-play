import { createContext, useContext, useReducer, useEffect } from 'react'
// reducer
import { VideoReducer } from '../reducers'
//action
const initialState = {
  watchedHistory: [],
  likedVideo: []
}
const VideoContext = createContext(initialState)

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(VideoReducer, initialState)

  useEffect(() => {}, [])

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  )
}
const useVideo = () => useContext(VideoContext)
export { VideoProvider, useVideo }
