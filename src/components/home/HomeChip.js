import React, { useEffect, useState } from 'react'
import './HomeChip.css'
import { useHome } from '../../context/HomeContext'
const HomeChip = () => {
  const { homeState, homeDispatch } = useHome()
  useEffect(() => {
    setCategories(homeState.categories)
  }, [homeState.categories])
  const [categories, setCategories] = useState([])

  return (
    <div>
      <div className='home-chip-wrapper'>
        {categories.length === 0
          ? console.warn('object')
          : categories.map(category => {
              const { categoryName } = category
              return (
                <p className='home-chip' key={categoryName} onClick={()=>{homeDispatch({type : "FILTER_BY_CATEGORY", payload:categoryName})}}>
                  {categoryName}
                </p>
              )
            })}
      </div>
    </div>
  )
}

export default HomeChip
