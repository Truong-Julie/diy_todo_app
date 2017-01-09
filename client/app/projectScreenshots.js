import React from 'react'

const ProjectScreenshotsComponent = (props) => {
  let { screenshots } = props
  return (
    <div className='screenshot-container'>
      {props.screenshots.map(screenshot => <img src=`../assets${screenshot.filePath}` />)
      }
    </div>
  )
}

export default ProjectScreenshotsComponent
