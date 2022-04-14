import { LOAD_ALL_CATEGORIES, FILTER_BY_CATEGORY,LOAD_ALL_HOME_VIDEO } from '../types'
export const HomeReducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_ALL_CATEGORIES:
      return { ...state, categories: payload }
    case FILTER_BY_CATEGORY:
      return { ...state, filterBy: payload }
    case LOAD_ALL_HOME_VIDEO:
      return { ...state, homeVideo: payload }

    default:
      return state
  }
}
