import React from 'react'
import { useVideo } from '../../context/VideoContext'
import { Link } from 'react-router-dom'
import { generateThumbnail } from '../../utils/homeUtils'
import { SiCoronarenderer } from 'react-icons/si'

import './css/historyCard.css'
const HistoryCard = () => {
  // const {
  //   videoState: { watchedHistory }
  // } = useVideo()

  const watchedHistory = [
    {
      _id: 'No8qdcVYiQw',
      title: 'Getting started with HTML5',
      channelName: 'Tanay Pratap',
      views: 40143,
      uploadedOn: 'Nov 22, 2020',
      categoryName: 'HTML',
      avatar:
        'https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s48-c-k-c0x00ffffff-no-rj',
      description:
        "Welcome to neogcamp's levelZero journey. You don't know anything about web development? Good, you have come to the right place. Not only you'll learn the language of the web: HTML, you'll learn how to make your site pretty with CSS. When we have learned everything we will put together a decent profile to host your Internet adventures.",
      id: '1'
    }
  ]
  const [data] = watchedHistory
  const { _id, title, channelName, views, avatar, description } = data

  return (
    <>
      <div key={'index'} className='home-video-card'>
        <h1>djas</h1>

        {watchedHistory.length === 0 ? (
          <h1>No watched history</h1>
        ) : (
          <>
            <Link to={`watch/${_id}`} onClick={() => {}}>
              <img
                src={generateThumbnail(_id)}
                alt='the video deleted form youtube server'
                className='thumbnail-responsive'
              />
            </Link>

            <div className='home-video-miniDescription'>
              <p>{title}</p>
              <p>{channelName}</p>
              <p>views : {views}</p>
            </div>
            <div className='home-video-quickAction'>
              <SiCoronarenderer />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default HistoryCard
