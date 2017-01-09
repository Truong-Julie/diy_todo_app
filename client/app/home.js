import React from 'react'
import NavBar from './navbar'
import BioContainer from './bio'
import Projects from './projects'
import data from '../data/data'

class Home extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className='info-container'>
          <BioContainer bio={data.bioComponent} />
          <Projects projects={data.projects} />
        </div>
      </div>
    )
  }
}

export default Home
