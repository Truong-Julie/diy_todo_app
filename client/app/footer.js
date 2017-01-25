import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer-container'>
      <div className='icons'>
        {props.contacts.map((contact, i) => (
          <a className='footer-link' href={contact.url} key={i} >
            <i className={contact.fontAwesome} aria-hidden='true' />
          </a>  
        ))}
      </div>
      <div className='copyright'>&copy; Julie Truong 2017</div>
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