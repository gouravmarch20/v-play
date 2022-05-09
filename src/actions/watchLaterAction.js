import axios from 'axios'
import toast from 'react-hot-toast'
import {
  LOAD_WATCH_LATER,
  ADD_TO_WATCH_LATER,
  REMOVE_WATCH_LATER,
  ERROR,
  LOADING
} from '../types'

// const headers = {
//   authorization:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E'
// }
export const loadWatchLater = async (token, videoDispatch) => {
  videoDispatch({ type: LOADING })
  try {
    const { data, status } = await axios.get('/api/user/watchlater', {
      headers: { authorization: token }
    })
    if (status === 200) {
      videoDispatch({ type: LOAD_WATCH_LATER, payload: data.watchlater })
    }
  } catch (error) {
    videoDispatch({ type: ERROR, payload: error.response })
  }
}
export const addToWatchLater = async (video, token, videoDispatch) => {
  const toastId = toast.loading('Adding video to watch later...')

  try {
    const response = await axios.post(
      '/api/user/watchlater',
      { video },
      {
        headers: { authorization: token }
      }
    )
    const { data, status } = response
    if (status === 200 || status === 201) {
      toast.success('Video added to watch later', {
        id: toastId
      })
      videoDispatch({ type: ADD_TO_WATCH_LATER, payload: data.watchlater })
    }
  } catch (error) {
    videoDispatch({ type: ERROR, payload: error.response })
  }
}

export const removeFromWatchLater = async (videoId, token, videoDispatch) => {
  const toastId = toast.loading('Deleting video from watch later...')
  try {
    const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: token }
    })
    const { data, status } = response
    if (status === 200) {
      toast.success('Video deleted from watch later.', {
        id: toastId
      })
      videoDispatch({ type: REMOVE_WATCH_LATER, payload: data.watchlater })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    videoDispatch({ type: ERROR, payload: error.response })
  }

  // }
}
