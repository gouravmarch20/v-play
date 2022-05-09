import {
  LOADING,
  ERROR,
  REMOVE_ALL_HISTORY,
  ADD_TO_WATCH_HISTORY,
  REMOVE_WATCH_HISTORY,
  LOAD_HISTORY,
  REMOVE_WATCH_LATER,
  ADD_TO_WATCH_LATER,
  LOAD_WATCH_LATER,
  LOAD_LIKE,
  ADD_LIKE,
  REMOVE_LIKE
} from '../types'

import { useHome } from '../context/HomeContext'

export const VideoReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, loading: false, error: payload }
    // histroy
    case LOAD_HISTORY:
      return { ...state, loading: false, watchedHistory: payload }
    case ADD_TO_WATCH_HISTORY: {
      return { ...state, watchedHistory: payload }
    }
    case REMOVE_WATCH_HISTORY:
   
      return { ...state, watchedHistory: payload }
    case REMOVE_ALL_HISTORY:
      return { ...state, watchedHistory: payload }
    // watch
    case LOAD_WATCH_LATER:
      return { ...state, loading: false, watchLater: payload }

    case ADD_TO_WATCH_LATER:
      return { ...state, watchLater: payload };
    case REMOVE_WATCH_LATER:
      return { ...state, watchLater: payload }
    // like
    case ADD_LIKE:
      return { ...state, likes: payload }
    case REMOVE_LIKE:
      return { ...state, likes: payload }

    default:
      return state
  }
}
