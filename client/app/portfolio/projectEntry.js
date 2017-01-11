import React from 'react'
import LinkContainerEntry from './linkContainerEntry'

const ProjectEntry = (props) => {
  let {fontAwesome} = props
  let {name, githubLink, screenshots} = props.project
  return (
    <div className='project-entry'>
      <div className='project-name'>{name}</div>
      <LinkContainerEntry url={githubLink} fontAwesome={fontAwesome} />
      <div className='screenshots-container'>
        { screenshots.map((screenshot, i) => 
          <img
            className='screenshot'
            src={`/assets/${screenshot.filePath}`} 
            key={i} 
          />
        )}
      </div>
    </div>
  )
}

export default ProjectEntry

