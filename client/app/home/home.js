import React from 'react'
import HomeTop from './homeTop'
import HomePortfolio from './homePortfolio'
import data from '../../data/data'

const Home = (props) => {
  console.log('HOME PROPS', props.route.data.projects)
  return (
    <div className='home-container'>
      <HomeTop />
      <HomePortfolio projects={props.route.data.projects} />
    </div>
  )
}

export default Home
// import BioContainer from './bio'

//<Projects
//  projects={data.projects}
//  fontAwesome={data.fontAwesome.github}
///>
// import Projects from './projects'


// <div className='info-container'>
//   <BioContainer bio={data.bioComponent} />
// </div>