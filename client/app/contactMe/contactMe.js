import React from 'react'
import Banner from '../banner'
import ContactMeContent from './contactMeContent'

let dummyBanner = {
  image: 'water_hike_3.JPG',
  header: 'Contact Me',
  tagline: 'If you need to ring me',
  alt: 'Zion National Park'
}

let summary = 'Think I would be a good team member? Contact me at julie.truong.lieu@gmail'

const ContactMe = (props) => (
  <div className='ContactMe-container'>
    <Banner {...dummyBanner} />
    <ContactMeContent summary={summary} />
  </div>
)

export default ContactMe
