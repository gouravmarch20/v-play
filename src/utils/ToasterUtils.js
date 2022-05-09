import React from 'react'
import { Toaster } from 'react-hot-toast'

export const ToasterWrapper = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        style: {
          minWidth: '300px'
        },
        success: {
          duration: 2500
        }
      }}
    />
  )
}
