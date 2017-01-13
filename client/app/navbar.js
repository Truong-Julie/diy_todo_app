import React from 'react'
import {Link} from 'react-router'

const NavBar = (props) => {
  return (
    <div className='nav-bar-container' style={{minHeight: `${props.height}vh`}}>
      <Link className='nav-link' to='/'><p>LOGO!!!</p></Link>
      <div className='nav-links'>
        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
        <Link className='nav-link' to='/'>About Me</Link>
        <Link className='nav-link' to='/'>Resume</Link>
        <Link className='nav-link' to='/'>Contact Me</Link>
      </div>
    </div>
  )
}

export default NavBar
