import React from 'react'
// import ProjectEntry from './projectEntry'
import ProjectCarousel from './projectCarousel'

let projectProps = { 
  name: 'Bookmark My Food',
  description: 'Bookmarking platform to save and organize your must try restaurants',
  techStack: '<fill here>',
  githubLink: 'https://github.com/Truong-Julie/Bookmark-My-Food',
  primaryImg: { 
    name: 'bookmarkMyFood_landing',
    filePath: 'bookmarkMyFood_landing.png'
  },
  screenshots: [
    { name: 'bookmarkMyFood_createAccount',
      filePath: 'bookmarkMyFood_createAccount.png'
    },
    { name: 'bookmarkMyFood_login',
      filePath: 'bookmarkMyFood_login.png'
    },
    { name: 'bookmarkMyFood_landing',
      filePath: 'bookmarkMyFood_landing.png'
    },
    { name: 'bookmarkMyFood_search',
      filePath: 'bookmarkMyFood_Search.png'
    },
    { name: 'bookmarkMyFood_bookmarked',
      filePath: 'bookmarkMyFood_bookmarked.png'
    }
  ]
}

class Portfolio extends React.Component {
  constructor (props) {
    super(props)
    // let {projects} = this.props
    // this.state = {
    //   currentProject: projects[0],
    //   allProjects: projects
    // }
  }
  render () {
    return (
      <div className='portfolio-container'> 
        Portfolio container
        <ProjectCarousel project={projectProps} />
      </div>
    )
  }
}

export default Portfolio


/*
{this.state.allProjects.map((project, i) => 
  <ProjectEntry
    project={project}
    fontAwesome={this.props.fontAwesome}
    key={i} 
  />
)}
*/