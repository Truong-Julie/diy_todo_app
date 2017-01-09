import React from 'react'
import LinkContainerEntry from './linkContainerEntry'

const ProjectEntry = (props) => {
  let {fontAwesome} = props
  let {name, githubLink, screenshots} = props.project
  console.log(githubLink)
  return (
    <div className='project-entry'>
      <div className='project-name'>{name}</div>
      <LinkContainerEntry url={githubLink} fontAwesome={fontAwesome} />
      { screenshots.map((screenshot, i) => 
        <img src={`/assets/${screenshot.filePath}`} key={i} />
      )}
    </div>
  )
}

export default ProjectEntry

