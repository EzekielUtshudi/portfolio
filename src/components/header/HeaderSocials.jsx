import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ezekiel-utshudi/" ><AiFillLinkedin/></a>
        <a href='https//github.com'  ><AiFillGithub/></a>
        <a href='https//twitter.com'  ><AiFillTwitterCircle/></a>
        <a href='https//facebook.com' ><AiFillFacebook/></a>


    </div>
  )
}

export default HeaderSocials