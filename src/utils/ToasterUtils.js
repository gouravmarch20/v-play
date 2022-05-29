import React from 'react'
import { Toaster } from 'react-hot-toast'

export const ToasterWrapper = () => {
  return (
    <Toaster
      position='center-center'
      reverseOrder={false}
      toastOptions={{
        style: {
          minWidth: '300px',
          minHeight: '80px',
          backgroundColor: '#0D0D0D',
          color: '#39FF14',
          fontSize: '1.4rem'
        },
        success: {
          duration: 1500
        }
      }}
    />
  )
}
