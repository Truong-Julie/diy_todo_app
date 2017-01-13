import React from 'react'
import TransitionGroup from 'react-addons-transition-group'
import CarouselEntry from './carouselEntry'
import ReactDom from 'react-dom'

// Carousel for each indivdual project

class ProjectCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPhotoIndex: 0,
      projectName: this.props.project.name,
      projectDescription: this.props.project.description,
      githubLink: this.props.project.githubLink,
      screenshots: this.props.project.screenshots,
      techStack: this.props.project.techStack
    }

    this.onRightArrowClick = this.onRightArrowClick.bind(this)
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this)

    this.circleStyle = {
      'backgroundColor': 'black',
      'minWidth': '30px',
      'minHeight': '30px',
      'borderRadius': '100px'
    }

    this.imageStyle = {
      'transition': 'all 2s',
      'transform': `translateX(100px)`
    }
  }

  componentDidMount () {
    console.log(window.innerWidth)
  }

  photoLeftPosition () {
    return
  }

  onRightArrowClick (e) {
    let prevImg = ReactDom.findDOMNode(this.refs.collection)
    // console.log(prevImg.__proto__, 'FINDDOMNODE')
    // prevImg.childNodes[1].style.setProperty('transform', 'translate(12px, 50%)')
    // transition: 'all 1s'
    // prevImg.childNodes[0].style.setProperty('transform', 'scale(.5)')
    Object.assign(prevImg.childNodes[0].style, {transform: 'translate(-100%)', transition: 'all 1s'})
    // prevImg.childNodes[0].style({transform: 'scale(.5)'})
    console.log(prevImg.childNodes[0].style, 'FINDDOMNODE')
    if (this.state.currentPhotoIndex < this.state.screenshots.length - 1) {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex + 1
      })
    } else {
      this.setState({
        currentPhotoIndex: 0
      })
    }
  }
  onLeftArrowClick (e) {
    console.log('test', e.target.getBoundingClientRect())
    if (this.state.currentPhotoIndex > 1) {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex - 1
      })
    } else {
      this.setState({
        currentPhotoIndex: this.state.screenshots.length - 1
      })
    }
  }
  render () {
    return (
      <div className='carousel-container'>
        <div className='arrow left-arrow' onClick={this.onLeftArrowClick}>{`<`}</div>
        <div className='carousel-screenshots' ref='collection'>
          <div><img src={`/assets/${this.state.screenshots[0].filePath}`} style={{display: 'block', transition: 'all 1s'}} /></div>
        </div>

        <div className='carousel-circle-container'>
          {this.state.screenshots.map((item, i) => {
            return this.state.currentPhotoIndex === i ? <div className='circle' style={{...this.circleStyle, backgroundColor: 'lightgrey'}} key={i} /> : <div className='circle' style={{...this.circleStyle}} key={i} />
            })
          }
        </div>

        <div className='arrow right-arrow' onClick={this.onRightArrowClick}>{`>`}</div>

        <div className='carousel-description-container'>
          <div className='project-name'>
            {this.state.projectName}
            <a href={this.state.githubLink}>
              <i className='fa fa-github' />
            </a>
          </div>
          <div className='project-description'>
            <p>{this.state.projectDescription}</p>
            <p>{this.state.techStack}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCarousel

// {this.state.screenshots.map((item, i) => {
//   return this.state.currentPhotoIndex === 0 ? <div><img key={i} src={`/assets/${this.state.screenshots[i].filePath}`} style={{display: 'block', transition: 'all 1s'}} /></div> : <img key={i} src={`/assets/${this.state.screenshots[i].filePath}`} style={{display: 'none', transition: 'all 1s'}} />
//   })
// }
// .style({
//       transform: 'translate(-100%)'
//     })
// Single photo
// <img src={`/assets/${this.state.screenshots[this.state.currentPhotoIndex].filePath}`} />
//  

// <div className='carousel-screenshots' style={{...this.imageStyle}}>
//   {this.state.screenshots.map((img, i) => 
//     <img src={`/assets/${this.state.screenshots[i].filePath}`} key={i} />
//   )}
// </div>