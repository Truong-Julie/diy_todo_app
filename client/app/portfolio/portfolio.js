import React from 'react'
import Banner from '../banner'
import ProjectEntry from './projectEntry'
// import ProjectCarousel from './projectCarousel'

// let projectProps = { 
//   name: 'Bookmark My Food',
//   description: 'Bookmarking platform to save and organize your must try restaurants',
//   techStack: '<fill here>',
//   githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
//   primaryImg: { 
//     name: 'bookmarkMyFood_landing',
//     filePath: 'bookmarkMyFood_landing.png'
//   },
//   screenshots: [
//     { name: 'bookmarkMyFood_createAccount',
//       filePath: 'bookmarkMyFood_createAccount.png'
//     },
//     { name: 'bookmarkMyFood_login',
//       filePath: 'bookmarkMyFood_login.png'
//     },
//     { name: 'bookmarkMyFood_landing',
//       filePath: 'bookmarkMyFood_landing.png'
//     },
//     { name: 'bookmarkMyFood_search',
//       filePath: 'bookmarkMyFood_Search.png'
//     },
//     { name: 'bookmarkMyFood_bookmarked',
//       filePath: 'bookmarkMyFood_bookmarked.png'
//     }
//   ] 
// }

let projects = [
  {
    image: 'lensity_home_page_resized.png',
    alt: 'screenshot',
    name: 'Lensity',
    githubLink: 'https://github.com/preposterous-kumquat',
    description: 'Photo sharing app utilizing machine learning',
    techStack: '*React, React-Router, Redux, Webpack, Node, Express, Sequelize, PostgreSQL, Redis, Python, Docker, AWS-S3, AWS-EC2',
    fontAwesome: 'fa fa-github'
  },   
  {
    image: 'tickr_landing_resized.png',
    alt: 'screenshot',
    name: 'Tickr',
    githubLink: 'https://github.com/Truong-Julie/TickrTaker',
    description: 'Price optimized auction marketplace for time-sensitive items',
    techStack: '*React, Node, Express, PostgreSQL, Sequelize',
    fontAwesome: 'fa fa-github'
  },
  {
    image: 'bookmarkMyFood_createAccount_resized.png',
    alt: 'screenshot',
    name: 'Bookmark My Food',
    githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
    description: 'Bookmarking platform to save and organize your must try restaurants',
    techStack: '*Angular, Node, Express, SQLite, Sequelize',
    fontAwesome: 'fa fa-github'
  },
  {
    image: 'newJuice_homepage_resized.png',
    alt: 'screenshot',
    name: 'News Juice',
    githubLink: 'https://github.com/Truong-Julie/VoraciousScroll',
    description: 'Trending news analysis and aggregator platform ',
    techStack: '*Angular, Node, Express, MongoDB, Mongoose',
    fontAwesome: 'fa fa-github'
  }
]

let dummyBanner = {
  image: 'portfolio_2.JPG',
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
