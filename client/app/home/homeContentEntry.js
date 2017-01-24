import React from 'react'
import {Link} from 'react-router'

const HomeContentEntry = (props) => (
  <div className='home-content-entry'>
    <h2>{props.title}</h2>
    <div className='home-content-image'>
      <Link to={`/${props.link}`}>
        <img src={props.image} alt={props.alt} />
      </Link>
    </div>
    <p className='summary'>{props.summary}</p>
    <div className='btn'>
      <Link to={`/${props.link}`}>{props.button}</Link>
    </div>
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
