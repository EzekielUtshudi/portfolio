import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5> What I Offer</h5>
      <h2> Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
           
          </ul>
        </article>

        {/* END OF UX/UI */}

        <article className='service'>
          <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
          </ul>
        </article>

        {/* END OF WE DEV */}
        <article className='service'>
          <div className='service__head'>
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem user interface and the user interface</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services