import React, { useEffect, useState } from 'react'
import './HomeChip.css'
import { useHome } from '../../context/HomeContext'
const HomeChip = () => {
  const { homeState, homeDispatch } = useHome()
  const [selectedChip, setSelectedChip] = useState(-1)
  const selectedChipHandler = chipId => {
    setSelectedChip(chipId)
  }
  useEffect(() => {
    setCategories(homeState.categories)
  }, [homeState.categories])
  const [categories, setCategories] = useState([])

  return (
    <div>
      <div className='home-chip-wrapper'>
        {categories.length === 0
          ? console.warn('object')
          : categories.map((category, index) => {
              const { categoryName } = category
              return (
                <button
                  className={`home-chip  ${
                    selectedChip === index ? 'home-chip-selected' : ''
                  }`}
                  key={categoryName}
                  onClick={() => {
                    selectedChipHandler(index)
                    homeDispatch({
                      type: 'FILTER_BY_CATEGORY',
                      payload: categoryName
                    })
                  }}
                >
                  {categoryName}
                </button>
              )
            })}
      </div>
    </div>
  )
}

export default HomeChip
