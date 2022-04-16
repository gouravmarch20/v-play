import axios from 'axios'
import { LOAD_ALL_CATEGORIES, LOAD_ALL_HOME_VIDEO } from '../types'
export const getHomeVideoList = async dispatch => {
  try {
    const { status, data } = await axios.get('/api/videos')
    
    dispatch({ type: LOAD_ALL_HOME_VIDEO, payload: data.videos })
  } catch (error) {}
}
export const getVideoCategory = async dispatch => {
  try {
    const { data, status } = await axios.get('/api/categories')
    dispatch({ type: LOAD_ALL_CATEGORIES, payload: data.categories })
  } catch (error) {}
}
