import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import nock from 'nock'
import request from 'superagent'

import Bio from '../client/app/bio'

let bioData = {
  name: 'James Bond',
  summary: 'I\'m awesome'
}

let wrapper

describe('Test suite for Bio Component', () => {
  beforeEach(() => {
    wrapper = shallow(<Bio bio={bioData} />)
  })

  it('Bio Component should exist', () => {
    expect(wrapper).to.exist
  })

  it('Correctly displays the profile name, image, summary and links', () => {
    expect(wrapper.type()).to.equal('div')
    expect(wrapper.hasClass('bio-container')).to.equal(true)

    let namePar = wrapper.childAt(0)
    expect(namePar.type()).to.equal('h3')
    expect(namePar.hasClass('bio-name')).to.equal(true)
    expect(namePar.text()).to.equal('James Bond')

    let bioImage = wrapper.childAt(1)
    expect(bioImage.type()).to.equal('div')
    expect(bioImage.hasClass('bio-image')).to.equal(true)

    let bioPar = wrapper.childAt(2)
    expect(bioPar.type()).to.equal('p')
    expect(bioPar.hasClass('bio-summary')).to.equal(true)
    expect(bioPar.text()).to.equal('I\'m awesome')

    let iconDiv = wrapper.childAt(3)
    expect(iconDiv.type()).to.equal('div')
    expect(iconDiv.hasClass('link-container')).to.equal(true)
  })

  it('Bio Image should have profile-circle class and an image tag', () => {
    let bioImage = wrapper.childAt(2)

    expect(bioImage.hasClass('bio-image'))
    let bioImageTag = bioImage.first()
    expect(bioImageTag.hasClass('img-circle'))
  })

  it('It should have 3 icons', () => {
    let iconDiv = wrapper.childAt(3)

    let githubIcon = iconDiv.childAt(0)
    expect(githubIcon.type()).to.equal('a')
    expect(githubIcon.childAt(0).type()).to.equal('i')
    expect(githubIcon.hasClass('link-tag')).to.equal(true)

    let linkedInIcon = iconDiv.childAt(1)
    expect(linkedInIcon.type()).to.equal('a')
    expect(linkedInIcon.childAt(0).type()).to.equal('i')
    expect(linkedInIcon.hasClass('link-tag')).to.equal(true)

    let angelListIcon = iconDiv.childAt(2)
    expect(angelListIcon.type()).to.equal('a')
    expect(angelListIcon.childAt(0).type()).to.equal('i')
    expect(angelListIcon.hasClass('link-tag')).to.equal(true)
  })
})

describe('Test Suite for NavBar', () => {
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('NavBar Component should exist', () => {
    expect(wrapper).to.exist
  })  
})

// describe('Test suite for UserComponent', () => {
//   beforeEach(() => {
//     // Prevent duplication
//     wrapper = shallow(<UserComponent
//                             name={ 'Reign' }
//                             age={ 26 } />);
//   });

//   it('UserComponent should exist', () => {
//     expect(wrapper).to.exist;
//   });

//   it('Correctly displays the user name and age in paragraphs wrapped under a parent div', () => {
//     expect(wrapper.type()).to.equal('div');
//     expect(wrapper.hasClass('user')).to.equal(true);

//     let namePar = wrapper.childAt(0);
//     expect(namePar.type()).to.equal('p');
//     expect(namePar.hasClass('user__name')).to.equal(true);
//     expect(namePar.text()).to.equal('Name: Reign');

//     let agePar = wrapper.childAt(1);
//     expect(agePar.type()).to.equal('p');
//     expect(agePar.hasClass('user__age')).to.equal(true);
//     expect(agePar.text()).to.equal('Age: 26');
//   });
// });



// class UsersListComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       usersList: []
//     };
//   }

//   componentDidMount() {
//     request
//       .get('https://api.github.com/users')
//       .end((err, res) => {
//         if (err) {
//           console.log(err);
//           return;
//         }

//         this.setState({
//           usersList: res.body.slice(0)
//         });
//       });
//   }

//   render() {
//     if (!this.state.usersList.length) {
//       return null;
//     }

//     return (
//       <div className="users-list">
//         { this._constructUsersList() }
//       </div>
//     );
//   }

//   _constructUsersList() {
//     return this.state.usersList.map((user, index) => {
//       return (
//         <UserComponent
//               key={ index }
//               name={ user.name }
//               age={ user.age } />
//       );
//     });
//   }
// }

// describe('Test suite for UsersListComponent', () => {
//   beforeEach(() => {
//     // Note the `beforeEach` from the start
//     wrapper = mount(<UsersListComponent />);
//   });

//   it('Renders null based on the initial state (empty `usersList` array)', () => {
//     expect(wrapper.state().usersList).to.be.instanceof(Array);
//     expect(wrapper.state().usersList.length).to.equal(0);
//     expect(wrapper.html()).to.equal(null);
//   });

//   it('Renders the root `div` with the right class and calls `_constructUsersList` to create the users list', () => {
//     sinon.spy(UsersListComponent.prototype, '_constructUsersList');
//     wrapper.setState({
//       usersList: [
//         {
//           name: 'Reign',
//           age: 26
//         }
//       ]
//     });
//     expect(wrapper.find('.users-list')).to.have.length(1);
//     expect(UsersListComponent.prototype._constructUsersList.calledOnce).to.equal(true);
//   });

//   it('The `_constructUsersList` behaves correctly', () => {
//     wrapper.setState({
//       usersList: [
//         {
//           name: 'Reign',
//           age: 26
//         },
//         {
//           name: 'Vlad',
//           age: 30
//         }
//       ]
//     });
//     const res = wrapper.instance()._constructUsersList();
//     expect(res).to.be.instanceof(Array);
//     expect(res.length).to.equal(2);
//     expect(mount(res[0]).type()).to.equal(UserComponent);
//     expect(res[0].props.name).to.equal('Reign');
//     expect(res[0].props.age).to.equal(26);
//     expect(mount(res[1]).type()).to.equal(UserComponent);
//     expect(res[1].props.name).to.equal('Vlad');
//     expect(res[1].props.age).to.equal(30);
//   });

//   it('Correctly updates the state after AJAX call in `componentDidMount` was made', (done) => {
//     nock('https://api.github.com')
//       .get('/users')
//       .reply(200, [
//         { 'name': 'Reign', 'age': 26 }
//       ]);
//     // Overwrite, so we can correctly reason about the count number
//     // Don't want shared state
//     wrapper = mount(<UsersListComponent />);
//     setTimeout(function() {
//       expect(wrapper.state().usersList).to.be.instanceof(Array);
//       expect(wrapper.state().usersList.length).to.equal(1);
//       expect(wrapper.state().usersList[0].name).to.equal('Reign');
//       expect(wrapper.state().usersList[0].age).to.equal(26);
//       nock.cleanAll();
//       done();
//     }, 1500);
//   });
// });
