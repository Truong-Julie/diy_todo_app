import React from 'react'
import Banner from '../banner'
import ContactMeContent from './contactMeContent'

let dummyBanner = {
  image: 'water_hike_200kb.jpg',
  header: 'Contact Me',
  tagline: '',
  alt: 'Limekin'
}

let summary = ['Think I would be a good team member?', 'Contact me at Julie.Truong.Lieu@gmail.com', 'Or click on one of the links below!']

const ContactMe = (props) => (
  <div className='ContactMe-container'>
    <Banner {...dummyBanner} />
    <ContactMeContent summary={summary} />
  </div>
)

export default ContactMe
