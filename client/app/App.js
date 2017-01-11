import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.oldPageYOffset = 0
    this.scrolling = this.scrolling.bind(this)
  }
  scrolling () {
    if (window.pageYOffset !== this.oldPageYOffset) {
      this.oldPageYOffset = window.pageYOffset
      // console.log('scrolling')
      // console.log('Window scrolling changed')
    }
  }
  render () {
    return (
      <div className='app-container'>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrolling)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrolling)
  }
}

export default App
