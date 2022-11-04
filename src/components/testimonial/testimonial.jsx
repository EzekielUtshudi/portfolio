import React from 'react'
import './testimonial.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

const DataTransfer = [
  {
    id: 1,
    name: 'John Doe',
    avatar: AVATAR1,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    name: 'John Doe',
    avatar: AVATAR2,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    name: 'John Doe',
    avatar: AVATAR3,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 4,
    name: 'John Doe',
    avatar: AVATAR4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

function Testimonial() {
  return (
    <section id='testimonials'>
      <h5> Review from clients</h5>
      <h2>Restimonials</h2>

      <div className='container testimonial__container'>
       {
        DataTransfer.map(({avatar,name,review},index) => {
          return(
            <article key={index} className='testimonial'>
          <div className='testimonial__avatar'>
            <img src={avatar} alt={name} />
          </div>

            <h5 ClassName='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </article>
        
          )
        })
       }
      </div>
    </section>
  )
}

export default Testimonial