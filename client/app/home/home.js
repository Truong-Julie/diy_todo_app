import React from 'react'
import NavBar from '../navbar'
// import BioContainer from './bio'
import HomeTop from './homeTop'
import HomePortfolio from './homePortfolio'
// import Projects from './projects'
import data from '../../data/data'

const Home = (props) => {
  console.log('HOME PROPS', props.route)
  return (
    <div className='home-container'>
      <HomeTop />
      <HomePortfolio />
    </div>
  )
}

export default Home

//<Projects
//  projects={data.projects}
//  fontAwesome={data.fontAwesome.github}
///>

// <div className='info-container'>
//   <BioContainer bio={data.bioComponent} />
// </div>