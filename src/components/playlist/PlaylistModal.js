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
    <div className='model'>
      <div className='modal-container'>
        <p>Save to ..</p>
        <button className='btn' onClick={onClose}>
          <RiCloseCircleFill />
        </button>
        <hr />
        <div className='model-options'>
          {playlists &&
            playlists.map(playlist => {
              const { _id: playlistId, title } = playlist
              const isVideoAlreadyInPlaylist = playlist.videos?.find(
                video => video._id === videoId
              )
              return (
                <div key={playlistId}>
                  <label className='modal-item'>
                    {title}
                    <input
                      type='checkbox'
                      className='custom-input'
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

        <div>
          <input
            className=''
            type='text'
            placeholder='Enter playlist name...'
            onChange={e => setTitle(e.target.value)}
          />
          <button
            disabled={title === ''}
            // className="btn btn-primary"
            onClick={() => {
              addPlayist(title, token, playlistDispatch)
              onClose()
              setTitle('')
              // onAddClick(title)
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaylistModal
