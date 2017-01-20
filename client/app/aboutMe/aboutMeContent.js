import React from 'react'

const AboutMeContent = (props) => (
  <div className='about-me-content-container'>
    <div className='about-me-image'>
      <img className='img-circle' src='../assets/Profile.jpg' alt='profile photo' />
    </div>
    <h3 className='about-me-name'>Julie Truong</h3>
    <p className='about-me-summary'>{props.summary}</p>
  </div>
)

export default AboutMeContent

AboutMeContent.propTypes = {
  summary: React.PropTypes.string
}
