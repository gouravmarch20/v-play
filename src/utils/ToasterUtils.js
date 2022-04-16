import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast('Here is your toast.')

export const ToasterUtils = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        style: {
          minWidth: '260px'
        },
        success: {
          duration: 2000
        }
      }}
    />
  )
}

