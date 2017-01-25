import React from 'react'
import Banner from '../banner'
import AboutMeContent from './aboutMeContent'

let dummyBanner = {
  image: 'about_me_2.JPG',
  header: 'About Me',
  tagline: 'A little about my journey...',
  alt: 'Zion National Park'
}

let summary = {
  summary: ['I\'m a native of the lovely bay area. \nI started my career as a revenue operations specialist at Yelp. During my time there, I noticed there were several manual processes that I thought could be automated.', '\t After developing my first Python scripts, I automated a full day\'s working into only a few short hours. This experience made me feel so empowered, I knew I needed to keep building.', '\t Most recently, I created a machine learning photo sharing application, where I architected the Node.js and Express RESTful API on a PostgreSQL database. I also developed a Dockerized and scalable microservice which captured the Clarify API to scrape data user photos uploads and to store them on an AWS S3 file server. Most recently, I\'ve built this website using React.', '\t My passion is contributing to a code base, across spanning all layers of the stack. I feel the most accomplishment when I can move seamlessly between multiple parts of the stack and contribute clean and modular code.', 'When I\'m not coding, I love spending my time cooking, playing basketball, building wood furniture, learning the guitar and doing outdoorsy things like camping or biking. I look forward to getting to know you too.']
}

const AboutMe = (props) => (
  <div className='aboutMe-container'>
    <Banner {...dummyBanner} />
    <AboutMeContent {...summary} />
  </div>
)

export default AboutMe
