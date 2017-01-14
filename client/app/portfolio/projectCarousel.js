import React from 'react'
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
      'minWidth': '10px',
      'minHeight': '10px',
      'borderRadius': '100px'
    }

    this.imageStyle = {
      'transition': 'all 2s',
      'transform': `translateX(100px)`
    }
  }

  componentDidMount () {
    let screenshotNodes = ReactDom.findDOMNode(this.refs.screenshots)
    // Object.assign(screenshotNodes.childNodes[0].style, {alignSelf: 'center'})
  }

  photoLeftPosition () {
    return
  }

  onRightArrowClick (e) {
    // sets the previous index to translate to 100%

    if (this.state.currentPhotoIndex < this.state.screenshots.length - 1) {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex + 1
      })
      // Object.assign(prevImg.childNodes[this.state.currentPhotoIndex].style, {transform: 'translate(0%)', transition: 'all 1s'})
    } else {
      this.setState({
        currentPhotoIndex: 0
      })
      // Object.assign(prevImg.childNodes[this.state.currentPhotoIndex].style, {transform: 'translate(0%)', transition: 'all 1s'})
    }
  }
  onLeftArrowClick (e) {
    // sets current photo to -100% 
    // set state to update currentIndex to next index
    // set next photo to translate 0 

    let prevImg = ReactDom.findDOMNode(this.refs.screenshots)
    console.log((this.state.currentPhotoIndex + 1) * 100)
    prevImg.childNodes.forEach(node => {
      Object.assign(node.style, {transform: `translate(-${(this.state.currentPhotoIndex + 1) * 100}%)`, transition: `all 1s`})
    })
    // Object.assign(prevImg.childNodes[this.state.currentPhotoIndex].style, {transform: `translate(-${(this.state.currentPhotoIndex + 1) * 100}%)`, transition: `all 1s`})
    // Object.assign(prevImg.childNodes[this.state.currentPhotoIndex + 1].style, {transform: `translate(-${(this.state.currentPhotoIndex + 1) * 100}%)`, transition: `all 1s`})
    if (this.state.currentPhotoIndex < this.state.screenshots.length) {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex + 1
      })
      Object.assign(prevImg.childNodes[this.state.currentPhotoIndex].style, {transform: `translate(-${(this.state.currentPhotoIndex + 1) * 100}%)`, transition: `all 1s`})
    } else {
      this.setState({
        currentPhotoIndex: 0
      })
      Object.assign(prevImg.childNodes[this.state.currentPhotoIndex].style, {transform: `translate(-${(this.state.currentPhotoIndex + 1) * 100}%)`, transition: `all 1s`})
    }
  }
  render () {
    return (
      <div className='carousel-container'>
        <div className='arrow left-arrow' onClick={this.onLeftArrowClick}>{`<`}</div>

        <div className='carousel-screenshots' ref='screenshots'>
          {this.state.screenshots.map((img, i) => 
            <div className='screenshot'>
              <img src={`/assets/${this.state.screenshots[i].filePath}`} />
            </div>
          )}
        </div>
        <div className='arrow right-arrow' onClick={this.onRightArrowClick}>{`>`}</div>
        <div className='carousel-circle-container' ref='dots'>
          {this.state.screenshots.map((item, i) => {
            return this.state.currentPhotoIndex === i ? <div className='circle' style={{...this.circleStyle, backgroundColor: 'lightgrey'}} key={i} /> : <div className='circle' style={{...this.circleStyle}} key={i} /> 
          })}
        </div>
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
//   return this.state.currentPhotoIndex === i ? <div className='circle' style={{...this.circleStyle, backgroundColor: 'lightgrey'}} key={i} /> : <div className='circle' style={{...this.circleStyle}} key={i} />
//   })
// }

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