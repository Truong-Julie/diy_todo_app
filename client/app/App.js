import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const fontAwesome = {
  github: 'fa fa-github',
  linkedIn: 'fa fa-linkedin-square',
  angelList: 'fa fa-angellist',
  email: 'fa fa-envelope'
}

const personalLinks = {
  links: [
    {tag: 'github',
      url: 'https://github.com/Truong-Julie',
      fontAwesome: fontAwesome.github},
    {tag: 'linkedIn',
      url: 'https://www.linkedin.com/in/truong-julie',
      fontAwesome: fontAwesome.linkedIn},
    {tag: 'angelList',
      url: 'https://angel.co/truong-julie',
      fontAwesome: fontAwesome.angelList
    },
    {tag: 'email',
      url: 'mailto:julie.truong.lieu@gmail.com?Subject=Hey%20Julie!%20Saw%20your%20website,%20let\'s%20chat!',
      fontAwesome: fontAwesome.email
    }
  ]
}

class App extends React.Component {
  constructor (props) {
    super(props) 
  }
  render () {
    return (
      <div className='app-container'>
        <Navbar />
        {this.props.children}
        <Footer contacts={personalLinks.links} />
      </div>
    )
  }
}

export default App
