import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { HomeProvider } from './context/HomeContext'
// Call make Server
makeServer()

ReactDOM.render(
  <BrowserRouter>
    <HomeProvider>
      <App />
    </HomeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
