import React from 'react'
import './footer.css'
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"



function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Basit Zaman</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home </a> </li>
        <li><a href='#about'>About </a> </li>
        <li><a href='#experience'>Experience </a> </li>
        <li><a href='#services'>Services </a> </li>
        <li><a href='#portfolio'>Portfolio</a> </li>
        <li><a href='#testimonials'>Testimonials </a> </li>
        <li><a href='#contact'>Contact</a> </li>
      </ul>
      <div className="footer__socials">
      <a href='https://www.facebook.com/basit.zaman1/' target="_blank"> <BsFacebook/>  </a>
      <a href='https://www.instagram.com/basit_zamann/'target="_blank"> <BsInstagram/> </a>
      <a href='https://twitter.com'target="_blank"> <AiFillTwitterCircle/> </a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Basit Zaman.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
