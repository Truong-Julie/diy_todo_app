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
  summary: ['I\'m a bay area native and have always lived in the bay. \nI Started my career as an revenue operations specialist at Yelp. During my time there I noticed there were several manual processes and I thought to myself, couldn\'t this be automated?', '\t After developing my first Python scripts, I automated a full day\'s working into only a few short hours. This experience made me feel so empowered, I knew I needed to keep building.', '\t Most recently, I created a photo sharing application, where I architected the Node.js and Express RESTful API on a PostgreSQL database. I also developed a Dockerized and scalable microservice which captured the Clarify API to scrape data user photos uploads and to store them on an AWS S3 file server. In addition, I am also a strong team player assisting our front-end engineer with code reviews and debugging.', '\t My passion is contributing to a code base, across spanning all layers of the stack. I feel the most accomplishment when I can move seamlessly between multiple parts of the stack and contribute clean and modular code. I recently']
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