import React from 'react'
import './footer.css'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'



function footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Ezekiel Utshudi</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/ezekiel.utshudi/' target={'_blank'}><FiFacebook/></a>
        <a href='https://www.instagram.com/ezekielutshudi/' target={'_blank'}><AiOutlineInstagram/></a>
        <a href='https://www.linkedin.com/in/ezekiel-utshudi-eteta-9b1b1b1b3/' target={'_blank'}><AiFillLinkedin/></a>
        <a href='https://www.twitter.com/ezekielutshudi' target={'_blank'}><FiTwitter/></a>
      </div>

      <div className='footer__copyright'>
         <small>
            © 2022 Ezekiel Utshudi. All rights reserved.
         </small>
      </div>

    </footer>
  )
}

export default footer