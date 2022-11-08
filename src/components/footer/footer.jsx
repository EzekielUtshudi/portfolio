import React from 'react'
import './footer.css'


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
        <a href='https://www.facebook.com/ezekiel.utshudi/' target={'_blank'}></a>
        <a href='https://www.instagram.com/ezekielutshudi/' target={'_blank'}></a>
        <a href='https://www.linkedin.com/in/ezekiel-utshudi-eteta-9b1b1b1b3/' target={'_blank'}></a>
        <a href='twitter.com/ezekielutshudi' target={'_blank'}></a>
      </div>
    </footer>
  )
}

export default footer