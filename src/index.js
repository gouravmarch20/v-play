import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import {HomeProvider} from './context/HomeContext'
// Call make Server
makeServer()

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
    <HomeProvider>
      <App />
    </HomeProvider>
    </BrowserRouter>
  // </React.StrictMode>
  ,
  document.getElementById('root')
)
