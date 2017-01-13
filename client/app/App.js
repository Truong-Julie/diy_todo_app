import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

class App extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      navBarHeight: 15
    }
    this.scrolling = this.scrolling.bind(this)
  }
  scrolling () {
    if (window.pageYOffset !== this.oldPageYOffset) {
      // console.log(window.pageYOffset, 'off set')
      this.setState({
        navBarHeight: 15
      })
    } else {
      this.setState({
        navBarHeight: 15
      })
    }
  }
  render () {
    return (
      <div className='app-container'>
        <Navbar height={this.state.navBarHeight} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
  componentDidMount () {
    this.oldPageYOffset = window.pageYOffset
    window.addEventListener('scroll', this.scrolling)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrolling)
  }
}

export default App
