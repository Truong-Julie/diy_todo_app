import React from 'react'

const HomePortfolio = (props) => {
  return (
    <div className='home-portfolio-container'>
    <div>Projects</div>
      {props.projects.map((project, i) => (
        <div className='project' key={i}>
          <div className='project-name'>{project.name}</div>
          <div className='project-image'>
            <img src={`/assets/${project.primaryImg.filePath}`} />
          </div>
          <div className='project-overlay' />
        </div>
        )
      )}

    </div>
  )
}

export default HomePortfolio

// add ability on click to navigate to link
