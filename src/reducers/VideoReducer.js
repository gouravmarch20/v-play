import { ADD_TO_WATCH_HISTORY } from '../types'
import { getVideoDetails } from '../utils/videoUtils'
import { useHome } from '../context/HomeContext'

export const VideoReducer = (state, { type, payload }) => {
  const {
    homeState: { homeVideo }
  } = useHome()
  switch (type) {
    case ADD_TO_WATCH_HISTORY:
      console.log(payload)
      const videoToAdd = getVideoDetails(homeVideo, payload)
      // console.log(videoToAdd)
      return { ...state, watchedHistory: [state.watchedHistory, videoToAdd] }

    // case FILTER_BY_CATEGORY:
    //   return { ...state, filterBy: payload }
    // case LOAD_ALL_HOME_VIDEO:
    //   return { ...state, homeVideo: payload }

    default:
      return state
  }
}
