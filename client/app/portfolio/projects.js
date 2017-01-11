import React from 'react'
import ProjectEntry from './projectEntry'
import ProjectCarousel from './projectCarousel'

class Projects extends React.Component {
  constructor (props) {
    super(props)
    let {projects} = this.props
    this.state = {
      currentProject: projects[0],
      allProjects: projects
    }
  }
  render () {
    return (
      <div className='projects-container'> 
        
      </div>
    )
  }
}

export default Projects


/*
{this.state.allProjects.map((project, i) => 
  <ProjectEntry
    project={project}
    fontAwesome={this.props.fontAwesome}
    key={i} 
  />
)}
*/