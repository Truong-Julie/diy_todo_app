import React from 'react'
import {Link} from 'react-router'

const NavBar = () => {
  return (
    <div className='nav-bar-container'>
    LOGO!!!
      <div className='nav-links'>
        <Link className='nav-link' to='/'>Projects</Link>
        <Link className='nav-link' to='/'>Profile</Link>
        <Link className='nav-link' to='/'>Resume</Link>
        <Link className='nav-link' to='/'>Contact Me</Link>
      </div>
    </div>
  )
}

export default NavBar
