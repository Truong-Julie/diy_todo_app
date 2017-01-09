import React from 'react'
import LinkContainer from './linkContainer'

const BioContainer = (props) => {
  let {name, summary, personalLinks} = props.bio
  return (
    <div className='bio-container'>
      <h3 className='bio-name'>{name}</h3>
      <div className='bio-image'>
        <img className='img-circle' src='../assets/Profile.jpg' />
      </div>
      <p className='bio-summary'>{summary}</p>
      <LinkContainer personalLinks={personalLinks} />
    </div>
  )
}

export default BioContainer
