import React from 'react'
import ReactDom from 'react-dom'
import TweenMax from 'gsap'

class CarouselEntry extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillEnter (callback) {
    const el = ReactDom.findDOMNode(this);
    console.log(this, 'enter')
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = ReactDom.findDOMNode(this);
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

  render () {
    return (
      <img src={`/assets/${this.props.image}`} />
    )
  }
}

export default CarouselEntry
