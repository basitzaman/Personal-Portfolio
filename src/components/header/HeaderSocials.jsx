import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsDribbble} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='Header__Socials'>
        <a href='https://www.linkedin.com/in/basit-zaman-25313768/'target='_blank'>< BsLinkedin/></a>
        <a href='https://github.com/basitzaman'target='_blank'> <BsGithub/></a>
        {/* <a href='https://dribble.com/'target='_blank'> <BsDribbble/></a> */}
        
    </div>
  )
}

export default HeaderSocials
