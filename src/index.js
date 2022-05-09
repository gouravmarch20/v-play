import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { HomeProvider } from './context/HomeContext'
import { VideoProvider } from './context/VideoContext'
import { AuthProvider } from './context/AuthContext'
// Call make Server
makeServer()

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <HomeProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </HomeProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
