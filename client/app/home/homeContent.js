import React from 'react'
import {Link} from 'react-router'
import data from '../../data/data'
import HomeContentEntry from './homeContentEntry'

let albumArt = data.dummyData.image
let altString = 'alt string'

let aboutMe = { title: 'About Me',
  image: data.dummyData.image,
  alt: 'alt string',
  summary: 'A bay area native, who cooks, draws and builds...',
  link: 'aboutMe',
  button: 'Learn more about me...'
}

let portfolio = { title: 'Portfolio',
  image: data.dummyData.image,
  alt: 'alt string',
  summary: 'Creatively buliding blocks...',
  link: 'portfolio',
  button: 'See what I\'ve created...'
}

let contactMe = { title: 'Contact Me',
  image: data.dummyData.image,
  alt: 'alt string',
  summary: 'Interested in contacting me...',
  link: 'contactMe',
  button: 'Find out how to contact me...'
}

const HomeContent = (props) => {
  return (
    <div className='home-content-container'>
      <HomeContentEntry {...aboutMe} />
      <HomeContentEntry {...portfolio} />
      <HomeContentEntry {...contactMe} />
    </div>
  )
}

export default HomeContent
