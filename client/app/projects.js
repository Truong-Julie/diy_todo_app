import React from 'react'
import ProjectEntry from './projectEntry'
import ProjectCarousel from './projectCarousel'

class Projects extends React.Component {
  constructor (props) {
    super(props)
    // current project 
    let {projects} = this.props
    this.state = {
      currentProject: projects[0],
      allProjects: projects
    }
  }
  render () {
    return (
      <div className='projects-container'> 
        {this.state.allProjects.map((project, i) => 
          <ProjectEntry
            project={project}
            fontAwesome={this.props.fontAwesome}
            key={i} 
          />
        )}
      </div>
    )
  }
}

export default Projects

