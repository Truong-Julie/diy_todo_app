import React from 'react'
import {Link} from 'react-router'

const NavBar = (props) => {
  return (
    <nav className='nav-bar-container' >
      <div className='nav-links'>
        <Link className='logo nav-link' to='/'>Julie Truong</Link>
        <Link className='nav-link' to='/aboutMe'>About Me</Link>
        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
        <a className='nav-link' href='../assets/JulieTruongResume.pdf'>Resume</a>
        <Link className='nav-link' to='/contactMe'>Contact Me</Link>
      </div>
    </nav>
  )
}

export default NavBar
