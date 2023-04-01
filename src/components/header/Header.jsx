import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
   <header>
    <div className="container header__container">
      <h5> Hello I'm</h5>
      <h1>Basit Zaman</h1>
      <h5 className="text-light"></h5>
        FullStack Developer
        <CTA></CTA>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>
      
    </div>


    </header>
  )
}

export default Header
