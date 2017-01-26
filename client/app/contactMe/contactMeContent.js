import React from 'react'

const ContactMeContent = (props) => (
  <div className='contact-me-content-container'>
    {props.summary.map((line, i) => <p>{line}</p>)}
  </div>
)
export default ContactMeContent

ContactMeContent.propTypes = {
  summary: React.PropTypes.string
} 