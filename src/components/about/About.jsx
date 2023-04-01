import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import{BiAward} from "react-icons/bi"
import{FiUsers} from "react-icons/fi"
import{VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2> About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME}alt="" />
        </div>

      </div>
      <div className="about__content">
       <div className="about__cards">
        <article className="about__card">
          <BiAward className='about__icon'/>
          <h5>Experience</h5>
          <small> Fresher </small>
        </article>

        <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small> -- Clients </small>
        </article>
        <a href='#portfolio'>
        <article className="about__card" target=" #portfolio" >
          <VscFolderLibrary className='about__icon'/>
          <h5 >Projects</h5>
          <small> 8+ Completed Projects </small>
        </article>
        </a>
       </div>
       <p className='para'>
       Hi there! My name is Basit Zaman and I am a fresh web developer with a passion for creating beautiful, functional, and user-friendly websites.I recently completed my web development training and have been honing my skills through personal projects.My love for technology began at a young age, and I have always been fascinated by the endless possibilities of the internet. As a web developer,I strive to create websites that not only look great but also offer an exceptional user experience.I enjoy the challenge of solving complex problems and have a detail-oriented approach to writing clean and maintainable code. I believe that effective communication and collaboration are key to delivering successful projects, and I enjoy working with cross-functional teams to ensure that all project requirements are met.I am continuously learning and improving my skills by taking online courses, attending web development meetups, and reading relevant articles and blogs.I believe in staying up-to-date with the latest technologies and best practices to deliver high-quality web applications.
       <b>Thank you for taking the time to learn more about me, and I look forward to the opportunity to work with you!</b>
       </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
       </div>
   </section>
  )
}

export default About
