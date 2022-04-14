import React from 'react'
import Mockman from 'mockman-js'
import NavHeader from './components/navbar/nav-header/NavHeader'
import Home from './pages/Home/Home'
import NavLeft from './components/navbar/nav-left/NavLeft'
import './Common.css'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/mockman' element={<MockmanApi />} /> */}
      {/* <Route path='*' element={<NotFound />} /> */}
      <Route path='/mockman' element={<Mockman />} />
    </Routes>
  )
}

const App = () => {
  return (
    <div>
      <NavHeader />
      <Router />
      {/* <Home /> */}
    </div>
  )
}

export default App
