import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'
import AVTR5 from '../../assests/coursera1.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR5,
    name:'Introduction to Web Development with HTML, CSS, JavaScript',
    by:'Offered By : IBM',
    head: 'WHAT I HAVE LEARNT:',
    review:'Describe the website development process and define terminology such as front-end, back-end, and full stack developers.Identify the developer tools and integrated development environments (IDEs) used by web developers.Create and structure basic web pages using HTML and style them with CSS.Develop dynamic web pages with interactive features using JavaScript. ' ,
    cert:'https://coursera.org/share/94d2aa61e69de2b2626e98176605edae'
  },
  {
    avatar:AVTR5,
    name:'The Bits and Bytes of Computer Networking',
    by:'Offered By : Google',
    head: 'WHAT I HAVE LEARNT:',
    review:'● Describe computer networks in terms of a five-layer model understanding all of the standard protocols involved with TCP/IP communications grasp powerful network troubleshooting tools and techniques . Understanding all of the standard protocols involved with TCP/IP communications grasp powerful network troubleshooting tools and techniques learn network services like DNS and DHCP that help make computer networks run . Understanding cloud computing, everything as a service, and cloud storage',
    cert:'https://coursera.org/share/c7a2b2597dde9520107eee78fe320dc0'
  },

{
  avatar:AVTR5,
  name:'Technical Support Fundamentals ',
  by:'Offered By : Google',
  head: 'WHAT I HAVE LEARNT:',
  review:'Understanding how the binary system works.Assembling a computer from scratch.Choose and install an operating system on a computer.Understanding what the Internet is, how it works, and the impact it has in the modern world.Learnt how applications are created and how they work under the hood of a computer.Utilized common problem-solving methodologies and soft skills in an Information Technology setting',
  cert:'https://coursera.org/share/ddf894946a54425ea04304e72d17c8b8'
},
// {
//   avatar:AVTR4,
//   name:'Doepl Mkao',
//   review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
// }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Course</h5>
      <h2>Certifications</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar,name,by,head,review,cert}, index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avtar">
            <img src={avatar} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <p>{by}</p>
              <small className='client__review'>{head}</small>
              <small className='client__review'>{review} </small>
              <h4> <a href={cert} target="__blank">Show Credentials</a></h4>
        </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
  )
}
export default testimonials
