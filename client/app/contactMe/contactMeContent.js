import React from 'react'

const ContactMeContent = (props) => (
  <div className='contact-me-content-container'>
    <p>{props.summary}</p>
  </div>
)
export default ContactMeContent

ContactMeContent.propTypes = {
  summary: React.PropTypes.string
} 