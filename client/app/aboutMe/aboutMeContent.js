import React from 'react'

const AboutMeContent = () => (
  <div className='about-me-content-container'>
    <div className='about-me-image'>
      <img className='img-circle' src='../assets/Profile.jpg' alt='profile photo' />
    </div>
    <div className='about-me-summary'>
      <h3 className='about-me-name'>Julie Truong</h3>
      <p>I'm a native of the lovely bay area. I started my career as a revenue operations specialist at Yelp. During my time there, I noticed there were several manual processes that I thought could be automated.
      </p>
      <p>After developing my first Python scripts, I automated a full day's working into only a few short hours. This experience made me feel so empowered, I knew I needed to keep building.
      </p>
      <p>Most recently, I created a machine learning photo sharing application, where I:</p>
      <ul>
        <li>Architected the Node.js and Express RESTful API on a PostgreSQL database.</li> 
        <li>Developed a Dockerized and scalable microservice which captured the Clarify API to scrape data user photos uploads and to store them on an AWS S3 file server.</li>
        <li>Most recently, I've built this website using React.</li>
      </ul>
      <p>My passion is contributing to a code base, across spanning all layers of the stack. I feel the most accomplishment when I can move seamlessly between multiple parts of the stack and contribute clean and modular code.
      </p>
      <p>When I'm not coding, I love spending my time cooking, playing basketball, building wood furniture, learning the guitar and doing outdoorsy things like camping or biking. I look forward to getting to know you too.
      </p>
    </div>
  </div>
)

export default AboutMeContent
