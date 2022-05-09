import React from 'react'
import Mockman from 'mockman-js'
import NavHeader from './components/navbar/nav-header/NavHeader'
import './Common.css'
import { Route, Routes, Navigate } from 'react-router-dom'
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
import { ToasterWrapper } from './utils/ToasterUtils'
import { useAuth } from "./context/AuthContext";

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
      <ToasterWrapper />
      <NavHeader />
      <Router />
    </div>
  )
}

export default App
