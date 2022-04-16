import React from 'react'
import Mockman from 'mockman-js'
import NavHeader from './components/navbar/nav-header/NavHeader'
import './Common.css'
import { Routes, Route } from 'react-router-dom'
import {
  WatchVideo,
  HistoryPage,
  LikedPage,
  PlaylistPage,
  TrendingPage,
  WatchLaterPage,
  NotFoundPage,
  HomePage,
  SignUpPage,
  SignInPage
} from './pages/index'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/watch/:videoId' element={<WatchVideo />} />
      <Route path='/history' element={<HistoryPage />} />
      <Route path='/liked' element={<LikedPage />} />
      <Route path='/trending' element={<TrendingPage />} />
      <Route path='/playlist' element={<PlaylistPage />} />
      <Route path='/watch-later' element={<WatchLaterPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/mockman' element={<Mockman />} />
    </Routes>
  )
}

const App = () => {
  return (
    <div>
      <NavHeader />
      <Router />
    </div>
  )
}

export default App
