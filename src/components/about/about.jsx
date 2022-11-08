import React from 'react'
import './about.css'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{AiFillFolderOpen} from 'react-icons/ai'
import ME from '../../assets/me-about.png'

function about() {
  return (
    <section id='about'>
    <h5>Get To Know </h5>
    <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about img'/>
          </div>  
        </div>

        <div className='about__me-text'>
          <div className='about__cards'>
          <article className='about__card'>
               <FaAward className='about__icon'/>
               <h5>Experience</h5>
               <small>2+ years </small>
               <p>Experience in web development and design</p>
          </article>
          <article className='about__card'>
               <FiUsers className='about__icon'/>
               <h5>Clients</h5>
               <small> 200 + Clients</small>
                
          </article>
          <article className='about__card'>
               <AiFillFolderOpen className='about__icon'/>
               <h5>Projects</h5>
               <small>80+ Projects </small>
          </article>
          </div>
          <p>
          A Full-stack developer with knowledge in HTML | CSS | JavaScript | Ruby. In my spare time, I research and edit videos.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>  
      </div>
    </section>
  )
}

export default about