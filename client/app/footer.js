import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer-container'>
      {props.contacts.map((contact, i) => (
        <a className='footer-link' href={contact.url} key={i} >
          <i className={contact.fontAwesome} aria-hidden='true' />
        </a>  
      ))}
    </div>
  )
}

export default Footer

Footer.propTypes = {
  url: React.PropTypes.string,
  fontAwesome: React.PropTypes.string
}

// contact me => mailto
// links to github, angelslist and linkedin