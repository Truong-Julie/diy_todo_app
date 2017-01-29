import React from 'react'
import Banner from '../banner'
import ProjectEntry from './projectEntry'

let projects = [
  {
    image: 'lensity_home_page_resized_150kb.jpg',
    alt: 'screenshot',
    name: 'Lensity',
    githubLink: 'https://github.com/preposterous-kumquat',
    description: 'Photo sharing app utilizing machine learning',
    techStack: '*React, React-Router, Redux, Webpack, Node, Express, Sequelize, PostgreSQL, Redis, Python, Docker, AWS-S3, AWS-EC2',
    fontAwesome: 'fa fa-github'
  },   
  {
    image: 'tickr_landing_resized_60kb.jpg',
    alt: 'Tickr Landing Page',
    name: 'Tickr',
    githubLink: 'https://github.com/Truong-Julie/TickrTaker',
    description: 'Price optimized auction marketplace for time-sensitive items',
    techStack: '*React, Node, Express, PostgreSQL, Sequelize',
    fontAwesome: 'fa fa-github'
  },
  {
    image: 'bookmarkMyFood_bookmarked_resized_125kb.jpg',
    alt: 'screenshot',
    name: 'Bookmark My Food',
    githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
    description: 'Bookmarking platform to save and organize your must try restaurants',
    techStack: '*Angular, Node, Express, SQLite, Sequelize',
    fontAwesome: 'fa fa-github'
  },
  {
    image: 'newJuice_homepage_resized_100kb.jpg',
    alt: 'screenshot',
    name: 'News Juice',
    githubLink: 'https://github.com/Truong-Julie/VoraciousScroll',
    description: 'Trending news analysis and aggregator platform ',
    techStack: '*Angular, Node, Express, MongoDB, Mongoose',
    fontAwesome: 'fa fa-github'
  }
]

let dummyBanner = {
  image: 'portfolio_195kb.jpg',
  header: 'Portfolio',
  tagline: 'Take a look at what I\'ve built',
  alt: 'Circular Saw'
}

const Portfolio = (props) => {
  return (
    <div className='portfolio'> 
      <Banner {...dummyBanner} />
      <div className='projects'>
        {projects.map((project, i) => (
          <ProjectEntry key={i} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
