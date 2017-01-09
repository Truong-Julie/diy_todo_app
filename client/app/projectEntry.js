import React from 'react'

const ProjectEntry = (props) => {
  let {name, githubLink, screenshots} = props.project
  return (
    <div className='project-entry'>
      <div className='project-name'>{name}</div>
    </div>
  )
}

export default ProjectEntry
