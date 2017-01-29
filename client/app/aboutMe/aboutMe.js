import React from 'react'
import Banner from '../banner'
import AboutMeContent from './aboutMeContent'

let dummyBanner = {
  image: 'about_me_200kb.jpg',
  header: 'About Me',
  tagline: 'A little about my journey...',
  alt: 'Camel Beach'
}

const AboutMe = (props) => (
  <div className='aboutMe-container'>
    <Banner {...dummyBanner} />
    <AboutMeContent />
  </div>
)

export default AboutMe
