import React from 'react'

const LinkContainerEntry = (props) => {
  let {url, fontAwesome} = props
  return (
    <div className='link'>
      <a className='link-tag' href={url}>
        <i className={fontAwesome} aria-hidden='true' />
      </a>
    </div>
  )
}
export default LinkContainerEntry
