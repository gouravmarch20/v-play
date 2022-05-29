import React, { useState } from 'react'
import { useHome } from '../../../context/HomeContext'
import { useNavigate } from 'react-router-dom'
import './search.css'
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const {
    homeState: { homeVideo }
  } = useHome()

  const submitSearch = text => {
    if (text) {
      navigate(`/results?search_query=${encodeURIComponent(text)}`)
      setSearchTerm('')
    }
  }

  const searchSuggestions = () => {
    const suggestions = []
    homeVideo?.forEach(video => {
      if (video.title.toLowerCase().includes(searchTerm?.toLowerCase())) {
        suggestions.push(
          <li
            className='suggestion-item'
            key={video._id}
            onClick={() => submitSearch(video.title)}
          >
            {video.title}
          </li>
        )
      }
    })
    return suggestions
  }

  return (
    <>
      <div className=''>
        <input
          className='search-field navbar-search'
          type='search'
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder='Search...'
          onKeyUp={e => {
            if (e.key === 'Enter') submitSearch(searchTerm)
          }}
        />
        {searchTerm && (
          <ul className='search-suggestions'>
            {searchSuggestions().length > 0 ? (
              searchSuggestions()
            ) : (
              <li className='suggestion-item'>{`No Search results for: ${searchTerm}`}</li>
            )}
          </ul>
        )}
      </div>
    </>
  )
}

export default Search
