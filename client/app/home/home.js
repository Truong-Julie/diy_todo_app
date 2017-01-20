import React from 'react'
import HomeContent from './homeContent'
import Banner from '../banner'
import data from '../../data/data'

let dummyBanner = {
  image: 'Home_Edited.JPG',
  header: 'A Software Engineer',
  tagline: 'Building automation',
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