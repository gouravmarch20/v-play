import axios from 'axios'
import toast from 'react-hot-toast'

import {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  REMOVE_PLAYLIST,
  ADD_VIDEO_TO_PLAYLIST,
  REMOVE_VIDEO_FROM_PLAYLIST,
  GET_VIDEO_FOR_PLAYLIST,
  LOADING,
  ERROR
} from '../types'

// const headers = {
//   authorization:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E'
// }

export const getPlaylists = async (token, playlistDispatch) => {
  playlistDispatch({ type: LOADING })
  try {
    const { data, status } = await axios.get('/api/user/playlists', {
      headers: { authorization: token }
    })
    if (status === 200) {
      playlistDispatch({ type: GET_PLAYLISTS, payload: data.playlists })
    }
  } catch (error) {
    playlistDispatch({ type: ERROR, payload: error.response })
  }
}
export const addPlayist = async (title, token, dispatch) => {
  const toastId = toast.loading('Creating playlist...')

  try {
    const { data, status } = await axios.post(
      '/api/user/playlists',
      {
        playlist: { title: title }
      },
      {
        headers: { authorization: token }
      }
    )
    if (status === 200 || status === 201) {
      toast.success('Playlist created successfully!', {
        id: toastId
      })
      dispatch({ type: ADD_PLAYLIST, payload: data.playlists })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    dispatch({ type: ERROR, payload: error.response })
  }
}
export const removePlaylist = async (playlistId, token, playlistDispatch) => {
  const toastId = toast.loading('Deleting playlist')
  try {
    const { data, status } = await axios.delete(
      `api/user/playlists/${playlistId}`,
      {
        headers: { authorization: token }
      }
    )
    if (status === 200) {
      toast.success('Playlist deleteed ', {
        id: toastId
      })
      playlistDispatch({ type: REMOVE_PLAYLIST, payload: data.playlists })
    }
  } catch (error) {
    toast.error('Some error occured ', {
      id: toastId
    })
    playlistDispatch({ type: ERROR, payload: error.response })
  }
}
export const addVideoToPlaylist = async (
  playlistId,
  video,
  token,
  playlistDispatch
) => {
  const toastId = toast.loading('Adding video to playlist...')
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: { authorization: token }
      }
    )
    const { data, status } = response
    console.log(data)
    if (status === 200 || status === 201) {
      toast.success('Video added to playlist', {
        id: toastId
      })
      playlistDispatch({ type: ADD_VIDEO_TO_PLAYLIST, payload: data.playlist })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    playlistDispatch({ type: ERROR, payload: error.response })
  }
}
export const deleteVideoFromPlaylist = async (
  playlistId,
  videoId,
  token,
  playlistDispatch
) => {
  const toastId = toast.loading('Removing video...')
  try {
    const { data, status } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: { authorization: token }
      }
    )
    if (status === 200) {
      toast.success('Video removed successfully.', {
        id: toastId
      })

      playlistDispatch({
        type: REMOVE_VIDEO_FROM_PLAYLIST,
        payload: data.playlist
      })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    playlistDispatch({ type: ERROR, payload: error.response })
  }
}
export const toggleCheckbox = (
  isVideoAlreadyInPlaylist,
  playlistId,
  videoId,
  video,
  token,
  dispatch
) =>
  isVideoAlreadyInPlaylist
    ? deleteVideoFromPlaylist(playlistId, videoId, token, dispatch)
    : addVideoToPlaylist(playlistId, video, token, dispatch)
