import { createContext, useContext, useReducer, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { PlaylistReducer } from '../reducers'
import { getPlaylists } from '../actions/playlistAction'

const initialState = {
  loading: false,
  error: null,
  playlists: []
}

const PlaylistContext = createContext(initialState)

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    PlaylistReducer,
    initialState
  )
  const {
    authState: { token }
  } = useAuth()

  useEffect(() => {
    token && getPlaylists(token, playlistDispatch)
  }, [token])

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  )
}

const usePlaylist = () => useContext(PlaylistContext)

export { PlaylistProvider, usePlaylist }
