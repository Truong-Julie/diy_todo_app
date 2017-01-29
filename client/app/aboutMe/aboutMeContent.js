import React from 'react'

const AboutMeContent = () => (
  <div className='about-me-content-container'>
    <div className='about-me-summary'>
      <h3 className='about-me-name'>Julie Truong</h3>
      <div className='about-me-image'>
        <img className='img-circle' src='../assets/Profile.jpg' alt='profile photo' />
      </div>
      <p>I'm a native of the lovely bay area. I started my career as a revenue operations specialist at Yelp. During my time there, I noticed there were several manual processes that I thought could be automated.
      </p>
      <p>After developing my first Python scripts, where I automated a full day's worth of work into only a few short hours. I knew I needed to keep building. That experience not only made me feel more empowered but it sparked a fire in me to keep building more applications. 
      </p>
      <p>Most recently, I created a machine learning photo sharing application, where I:</p>
      <ul>
        <li>Architected the Node.js and Express RESTful API on a PostgreSQL database</li> 
        <li>Developed a Dockerized and scalable microservice which captured the Clarify API to scrape data from user uploaded photos</li>
        <li>Lastly, I've built this website using React</li>
      </ul>
      <p>My goal to contribute clean and modular code to a large code base, and always leaving it better than when I first found it. Accomplishment to me, is when others can benefit from my contributions, from my fellow engineers to the end user.
      </p>
      <p>When I'm not coding, I love spending my time cooking, playing basketball, building wood furniture, learning the guitar and doing outdoorsy things like camping or biking. I look forward to getting to know you too.
      </p>
    </div>
  </div>
)

export default AboutMeContent
