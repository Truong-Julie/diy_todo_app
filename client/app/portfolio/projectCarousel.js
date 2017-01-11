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
    this.circleStyle = {
      'backgroundColor': 'black',
      'minWidth': '30px',
      'minHeight': '30px',
      'borderRadius': '100px'
    }
    this.onRightArrowClick = this.onRightArrowClick.bind(this)
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this)
  } 
  onRightArrowClick () {
    if (this.state.currentPhotoIndex < this.state.screenshots.length - 1) {
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
  onLeftArrowClick () {
    if (this.state.currentPhotoIndex > 1) {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex - 1
      })
    } else {
      this.setState({
        currentPhotoIndex: this.state.screenshots.length - 1
      })
    }
    console.log('left arrow click')
  }
  render () {
    return (
      <div className='carousel-container'>
        <div className='arrow left-arrow' onClick={this.onLeftArrowClick}>{`<`}</div>
        <img src={`/assets/${this.state.screenshots[this.state.currentPhotoIndex].filePath}`} />
        <div className='carousel-circle-container'>
          {this.state.screenshots.map((item, i) => {
            console.log(i, 'num of items')
            return this.state.currentPhotoIndex === i ? <div className='circle' style={{...this.circleStyle, backgroundColor: 'lightgrey'}} key={i} /> : <div className='circle' style={{...this.circleStyle}} key={i} />
            })
          }
        </div>
        <div className='arrow right-arrow' onClick={this.onRightArrowClick}>{`>`}</div>
      </div>
    )
  }
}

export default ProjectCarousel
