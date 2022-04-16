import { ADD_TO_WATCH_HISTORY, REMOVE_WATCH_HISTORY } from '../types'
import { getVideoDetails } from '../utils/videoUtils'
import { useHome } from '../context/HomeContext'

export const VideoReducer = (state, { type, payload }) => {
  const {
    homeState: { homeVideo }
  } = useHome()
  switch (type) {
    case ADD_TO_WATCH_HISTORY:
      console.log(payload);
      return { ...state,watchedHistory :  payload }
    case REMOVE_WATCH_HISTORY:
      return { ...state, watchedHistory: payload }



    default:
      return state
  }
}
