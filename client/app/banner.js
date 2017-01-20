import React from 'react'

const Banner = (props) => (
  <section className='banner-container'>
    <div className='banner-image'>
      <img src={`../assets/${props.image}`} className='banner-image' alt={props.alt} />
    </div>
    <h3>{props.header}</h3>
    props.tagline ? <h5>{props.tagline}</h5> : ''
  </section>
)

export default Banner

Banner.propTypes = {
  image: React.PropTypes.string,
  header: React.PropTypes.string,
  alt: React.PropTypes.string
}
// add button
// 50kB