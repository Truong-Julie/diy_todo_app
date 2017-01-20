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
    image: 'bookmarkMyFood_createAccount_Resized.png',
    alt: 'screenshot',
    name: 'Bookmark My Food',
    githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
    description: 'Bookmarking platform to save and organize your must try restaurants',
    techStack: '<insert tech stack>',
    fontAwesome: 'fa fa-github'
  },
  {
    image: 'bookmarkMyFood_createAccount_Resized.png',
    alt: 'screenshot',
    name: 'Tickr',
    githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
    description: 'Bookmarking platform to save and organize your must try restaurants',
    techStack: '<insert tech stack>',
    fontAwesome: 'fa fa-github'
  },
  {
    image: 'bookmarkMyFood_createAccount_Resized.png',
    alt: 'screenshot',
    name: 'News Juice',
    githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
    description: 'Bookmarking platform to save and organize your must try restaurants',
    techStack: '<insert tech stack>',
    fontAwesome: 'fa fa-github'
  },
  {
    image: 'bookmarkMyFood_createAccount_Resized.png',
    alt: 'screenshot',
    name: 'Lensity',
    githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
    description: 'Bookmarking platform to save and organize your must try restaurants',
    techStack: '<insert tech stack>',
    fontAwesome: 'fa fa-github'
  }   
]

let dummyBanner = {
  image: 'portfolio_1.JPG',
  header: 'Portfolio',
  tagline: 'Take a look at what I\'ve built',
  alt: 'Circular Saw'
}

const Portfolio = (props) => {
  return (
    <div className='portfolio'> 
      <Banner {...dummyBanner} />
      {projects.map((project, i) => (
        <ProjectEntry key={i} {...project} />
      ))}
    </div>
  )
}

export default Portfolio
