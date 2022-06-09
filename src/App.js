import React from 'react'
import NavHeader from './components/navbar/nav-header/NavHeader'
import './Common.css'
import { Route, Routes } from 'react-router-dom'
import {
  WatchVideo,
  HistoryPage,
  LikedPage,
  PlaylistPage,
  PlaylistVideoPage,
  // TrendingPage,
  WatchLaterPage,
  NotFoundPage,
  HomePage,
  SignUpPage,
  SignInPage,SearchResultPage
} from './pages/index'
import { ToasterWrapper } from './utils/ToasterUtils'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/watch/:videoId' element={<WatchVideo />} />
      <Route path='/history' element={<HistoryPage />} />
      <Route path='/liked' element={<LikedPage />} />
      {/* <Route path='/trending' element={<TrendingPage />} /> */}
      <Route path='/playlist' element={<PlaylistPage />} />
      <Route path='/playlists/:playlistId' element={<PlaylistVideoPage />} />
      <Route path='/watch-later' element={<WatchLaterPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/results' element={<SearchResultPage />} />

      <Route path='*' element={<NotFoundPage />} />

    </Routes>
  )
}

const App = () => {
  return (
    <div>
      <ToasterWrapper />
      <NavHeader />
      <Router />
    </div>
  )
}

export default App
