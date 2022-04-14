import { createContext, useContext, useReducer, useEffect } from 'react'
import { HomeReducer } from '../reducers'
import { getVideoCategory, getHomeVideoList } from '../actions/homeAction'
const initialState = {
  categories: [],
  filterBy: '',
  homeVideo: []
}
const HomeContext = createContext(initialState)

const HomeProvider = ({ children }) => {
  const [homeState, homeDispatch] = useReducer(HomeReducer, initialState)
  useEffect(() => {
    getHomeVideoList(homeDispatch)
    getVideoCategory(homeDispatch)
  }, [])

  return (
    <HomeContext.Provider value={{ homeState, homeDispatch }}>
      {children}
    </HomeContext.Provider>
  )
}
const useHome = () => useContext(HomeContext)
export { HomeProvider, useHome }
