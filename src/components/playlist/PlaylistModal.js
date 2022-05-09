import React, { useState } from 'react'
import './css/playlistModel.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { usePlaylist } from '../../context/PlaylistContext'
import { addPlayist, addVideoToPlaylist } from '../../actions/playlistAction'
import { useAuth } from '../../context/AuthContext'

const PlaylistModal = ({ videoId, onClose, onAddClick, onPlaylistCheck }) => {
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
        {/* <div className='model-options'>
          {playlists &&
            playlists.map(playlist => (
              <div key={playlist._id}>
                <label htmlFor='' className='modal-item'>
                  <input
                    type='checkbox'
                    name={playlist.name}
                    id={playlist.name}
                    checked={playlist.videos.some(({ _id }) => _id === videoId)}
                    onChange={() => {
                      onPlaylistCheck(playlist._id)
                      onClose()
                    }}
                  />
                  {playlist.name}
                </label>
              </div>
            ))}
        </div> */}

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
              onClose()
              addPlayist(title, token, playlistDispatch)
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
