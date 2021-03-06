import React from 'react'
import HomeContent from './homeContent'
import Banner from '../banner'
import data from '../../data/data'

let dummyBanner = {
  image: 'Home_Edited_150kb.jpg',
  header: 'A Software Engineer',
  tagline: 'Building applications',
  alt: 'Zion National Park'
}

const Home = (props) => {
  return (
    <div className='home-container'>
      <Banner {...dummyBanner} />
      <HomeContent />
    </div>
  )
}

export default Home


// import HomeTop from './homeTop'
// import HomePortfolio from './homePortfolio'