import React from 'react'
import LinkContainerEntry from './linkContainerEntry'

const LinkContainer = (props) => {
  let {links} = props.personalLinks
  return (
    <div className='link-container'>
      {links.map((link, i) =>
        <LinkContainerEntry key={i} linkInfo={link} />
      )}
    </div>
  )
}

export default LinkContainer
