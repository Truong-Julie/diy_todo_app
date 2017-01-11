import React from 'react'

// Carousel for each indivdual project

class ProjectCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPhotoIndex: 0,
      projectName: this.props.project.name,
      screenshots: this.props.project.screenshots
    }
    console.log(this.state.screenshots)
    this.onRightArrowClick = this.onRightArrowClick.bind(this)
  } 
  onRightArrowClick () {
    if (this.state.currentPhotoIndex < this.state.screenshots.length - 1) {
      console.log('in here')
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex + 1
      })
    } else {
      this.setState({
        currentPhotoIndex: 0
      })
    }
    console.log('right arrow click')
  }
  render () {
    return (
      <div className='carousel-container'>
        Carousel
        <div className='left-arrow' >{`<`}</div>
        <img src={`/assets/${this.state.screenshots[this.state.currentPhotoIndex].filePath}`} />
        <div className='right-arrow' onClick={this.onRightArrowClick}>{`>`}</div>
      </div>
    )
  }
}

export default ProjectCarousel
