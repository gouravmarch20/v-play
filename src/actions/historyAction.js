import axios from 'axios'
import { ADD_TO_WATCH_HISTORY, REMOVE_WATCH_HISTORY } from '../types'
const headers = {
  authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E'
}

export const addToHistory = async (video, videoDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/history',
      { video },
      {
        headers
      }
    )
    const { data, status } = response
    console.log(status)
    if (status === 201) {
      console.log('object')
      videoDispatch({ type: ADD_TO_WATCH_HISTORY, payload: data.history })
    }
  } catch (error) {}
}
export const removeFromHistory = async (videoId, videoDispatch) => {
  const response = await axios.delete(`/api/user/history/${videoId}`, {
    headers
  })
  const { data, status } = response
  if (status === 200) {
    
    videoDispatch({type: 'REMOVE_WATCH_HISTORY' , payload:data.history})
  }
}
