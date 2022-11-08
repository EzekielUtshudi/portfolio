import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiFillAccountBook} from 'react-icons/ai'
import {FcServices} from 'react-icons/fc'
import {SiGooglemessages} from 'react-icons/si'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav('#')} className={activeNav === '#home' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about'><AiOutlineUserAdd/></a>
      <a href='#experience'><AiFillAccountBook/></a>
      <a href='#services'><FcServices/></a>
      <a href='#contact'><SiGooglemessages/></a>
    </nav>
  )
}

export default Nav