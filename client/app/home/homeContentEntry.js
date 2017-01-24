import React from 'react'
import {Link} from 'react-router'

const HomeContentEntry = (props) => (
  <div className='home-content-entry'>
    <h2>{props.title}</h2>
    <div className='home-content-image'>
      <img src={props.image} alt={props.alt} />
    </div>
    <p className='summary'>{props.summary}</p>
    <Link to={`/${props.link}`} >
      <div className='btn'>{props.button}</div>
    </Link>
  </div>
)

export default HomeContentEntry

HomeContentEntry.propType = {
  title: React.PropTypes.string,
  image: React.PropTypes.string,
  alt: React.PropTypes.string,
  summary: React.PropTypes.string,
  link: React.PropTypes.string,
  button: React.PropTypes.string
}
