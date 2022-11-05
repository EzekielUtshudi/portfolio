import React from 'react'
import './testimonial.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
       {
        DataTransfer.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
          <div className='testimonial__avatar'>
            <img src={avatar} alt={name} />
          </div>

            <h5 ClassName='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
        
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonial