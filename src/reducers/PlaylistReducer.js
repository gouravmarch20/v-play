import {
  LOADING,
  ERROR,
  REMOVE_PLAYLIST,
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  ADD_VIDEO_TO_PLAYLIST,
  REMOVE_VIDEO_FROM_PLAYLIST,
  GET_VIDEO_FOR_PLAYLIST
} from '../types'
export const PlaylistReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, loading: false, error: payload }
    case GET_PLAYLISTS:
      return { ...state, loading: false, playlists: payload }
    case ADD_PLAYLIST:
      return { ...state, playlists: payload }
    case REMOVE_PLAYLIST:
      return { ...state, playlists: payload }
    //   TODO: - DRY RUN
    case ADD_VIDEO_TO_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map(playlist =>
          playlist._id === playlist._id ? payload : playlist
        )
      }
    case REMOVE_VIDEO_FROM_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map(playlist =>
          playlist._id === payload._id ? payload : playlist
        )
      }
    default:
      return state
  }
}
