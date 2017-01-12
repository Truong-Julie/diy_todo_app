import React from 'react'

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

        <div className='carousel-screenshots' style={{...this.imageStyle}}>
          {this.state.screenshots.map((img, i) => 
            <img src={`/assets/${this.state.screenshots[i].filePath}`} key={i} />
          )}
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

// Single photo
//           <img src={`/assets/${this.state.screenshots[this.state.currentPhotoIndex].filePath}`} />