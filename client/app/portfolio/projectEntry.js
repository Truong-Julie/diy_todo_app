import React from 'react'

const ProjectEntry = (props) => {
  return (
    <div className='project-entry'>
      <div className='project-image'>
        <img src={`../assets/${props.image}`} alt={props.alt} />
      </div>
      <div className='project-info'>
        <div className='project-name'>
          <h3>{props.name}</h3>
          <a className='github-link'href={props.githubLink}>
            <i className={props.fontAwesome} aria-hidden='true' />
          </a>
        </div>
        <div className='project-summary'>
          <p className='project-description'>{props.description}</p>
          <p className='project-stack'>{props.techStack}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectEntry

ProjectEntry.propTypes = {
  image: React.PropTypes.string,
  alt: React.PropTypes.string,
  name: React.PropTypes.string,
  githubLink: React.PropTypes.string,
  description: React.PropTypes.string,
  techStack: React.PropTypes.string,
  fontAwesome: React.PropTypes.string
}

