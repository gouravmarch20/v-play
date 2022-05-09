import axios from 'axios'
import toast from 'react-hot-toast'
import {
  LOADING,
  LOAD_HISTORY,
  REMOVE_WATCH_HISTORY,
  ADD_TO_WATCH_HISTORY,
  REMOVE_ALL_HISTORY
} from '../types'
// const headers = {
//   authorization:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E'
// }

export const getHistory = async (token, videoDispatch) => {
  videoDispatch({ type: LOADING })
  try {
    const { data, status } = await axios.get('/api/user/history', {
      headers: { authorization: token }
    })
    if (status === 200) {
      videoDispatch({ type: LOAD_HISTORY, payload: data.history })
    }
  } catch (error) {
    videoDispatch({ type: 'ERROR', payload: error.response })
  }
}

export const addToHistory = async (video, token, videoDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/history',
      { video },
      {
        headers: { authorization: token }
      }
    )
    const { data, status } = response
    if (status === 201) {
      videoDispatch({ type: ADD_TO_WATCH_HISTORY, payload: data.history })
    }
  } catch (error) {
    videoDispatch({ type: 'ERROR', payload: error.response })
  }
}
export const removeFromHistory = async (videoId, token, videoDispatch) => {
  const toastId = toast.loading('deleting video')
  try {
    const { data, status } = await axios.delete(
      `/api/user/history/${videoId}`,
      {
        headers: { authorization: token }
      }
    )
    if (status === 200) {
      toast.success('Video deleted from history.', {
        id: toastId
      })
      videoDispatch({ type: REMOVE_WATCH_HISTORY, payload: data.history })
    }
  } catch (error) {
    toast.error('Error occured , Try Again ', {
      id: toastId
    })
    videoDispatch({ type: 'ERROR', payload: error.response })
  }
}
export const clearAllHistory = async (token, videoDispatch) => {
  const toastId = toast.loading('Deleting all your watched history')
  try {
    const { data, status } = await axios.delete('/api/user/history/all', {
      headers: { authorization: token }
    })
    if (status === 200) {
      toast.success('History cleaned up !!!', {
        id: toastId
      })
      videoDispatch({ type: REMOVE_ALL_HISTORY, payload: data.history })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    videoDispatch({ type: 'ERROR', payload: error.response })
  }
}
