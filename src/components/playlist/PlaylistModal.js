import React, { useState } from 'react'
import './css/playlistModel.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { usePlaylist } from '../../context/PlaylistContext'
import {
  addPlayist,
  addVideoToPlaylist,
  toggleCheckbox
} from '../../actions/playlistAction'
import { useAuth } from '../../context/AuthContext'

const PlaylistModal = ({ videoId, onClose, onPlaylistCheck, videoDetail }) => {
  const [title, setTitle] = useState('')
  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  const {
    playlistDispatch,
    playlistState: { playlists }
  } = usePlaylist()

  return (
    // <div >
    <main className='modal-container'>
      <div className='modal-main mb-10'>
        <p className='save-title '>Save to </p>
        <button className='btn btn-danger p-10' onClick={onClose}>
          <i className='modal-close-icon'>
            <RiCloseCircleFill />
          </i>
        </button>
      </div>

      <div className='model-options'>
        {playlists &&
          playlists.map(playlist => {
            const { _id: playlistId, title } = playlist
            const isVideoAlreadyInPlaylist = playlist.videos?.find(
              video => video._id === videoId
            )
            return (
              <div key={playlistId}>
                <label className='modal-item '>
                  <p className='modal-title'> {title}</p>
                  <input
                    type='checkbox'
                    className='checkbox-item '
                    name='playlist_checkbox'
                    checked={isVideoAlreadyInPlaylist || false}
                    onChange={() => {
                      toggleCheckbox(
                        isVideoAlreadyInPlaylist,
                        playlist._id,
                        videoId,
                        videoDetail,
                        token,
                        playlistDispatch
                      )
                      onClose()
                    }}
                  />
                </label>
              </div>
            )
          })}
      </div>

      <div className='create-playlist'>
        <input
          className='input-item'
          type='text'
          placeholder='Enter playlist name...'
          onChange={e => setTitle(e.target.value)}
        />
        <button
          disabled={title === ''}
          className='btn btn-info'
          onClick={() => {
            addPlayist(title, token, playlistDispatch)
            onClose()
            setTitle('')
          }}
        >
          Add
        </button>
      </div>
    </main>
  )
}

export default PlaylistModal
