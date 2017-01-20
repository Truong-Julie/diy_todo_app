import React from 'react'
import Banner from '../banner'
import AboutMeContent from './aboutMeContent'

let dummyBanner = {
  image: 'Home_Edited.JPG',
  header: 'Julie Truong',
  tagline: 'The chef, the builder, and software engineer',
  alt: 'Zion National Park'
}

let summary = {
  summary: 'Im a bay area native. \n Started my career as an revenue operations specialist at Yelp. During my time there I noticed there were several manual processes and I thought to myself, couldn\'t this be automated? \n I\'ve always been curious about building software which make people\'s lives easier.'
}

const AboutMe = (props) => (
  <div className='aboutMe-container'>
    <Banner {...dummyBanner} />
    <AboutMeContent {...summary} />
  </div>
)

export default AboutMe
/*

I'm a bay area native 
Started my career as an revenue operations specialist at Yelp. During my time there I noticed there were several manual processes and I thought to myself, couldn't this be automated?

I've always been curious about building software which make people's lives easier.

*/