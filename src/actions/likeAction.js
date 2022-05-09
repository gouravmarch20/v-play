import axios from 'axios'
import toast from 'react-hot-toast'

import { ADD_LIKE, REMOVE_LIKE, LOAD_LIKE } from '../types'

// const headers = {
//   authorization:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E'
// }
export const getLikedVideos = async (token, videoDispatch) => {
  videoDispatch({ type: 'LOADING' })
  try {
    const { data, status } = await axios.get('/api/user/likes', {
      headers: { authorization: token }
    })
    if (status === 200) {
      videoDispatch({ type: LOAD_LIKE, payload: data.likes })
    }
  } catch (error) {
    videoDispatch({ type: 'ERROR', payload: error.response })
  }
}
export const addLike = async (video, token, videoDispatch) => {
  const toastId = toast.loading('Adding video to liked ')
  try {
    const response = await axios.post(
      '/api/user/likes',
      { video },
      {
        headers: { authorization: token }
      }
    )
    const { data, status } = response
    if (status === 200 || status === 201) {
      toast.success('Video added to liked list', {
        id: toastId
      })
      videoDispatch({ type: ADD_LIKE, payload: data.likes })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    videoDispatch({ type: 'ERROR', payload: error.response })
  }
}
export const removeLike = async (videoId, token, videoDispatch) => {
  const toastId = toast.loading('Deleting video from liked history')

  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: token }
    })
    const { data, status } = response
    if (status === 200) {
      toast.success('Video deleted from liked history', {
        id: toastId
      })

      videoDispatch({ type: REMOVE_LIKE, payload: data.likes })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    videoDispatch({ type: 'ERROR', payload: error.response })
  }
}
// removeLi
