import React from 'react'
import './portfolio.css'
import IMAGE1 from '../../assets/portfolio1.jpg'
import IMAGE2 from '../../assets/portfolio2.jpg'
import IMAGE3 from '../../assets/portfolio3.jpg'
import IMAGE4 from '../../assets/portfolio4.jpg'
import IMAGE5 from '../../assets/portfolio5.png'
import IMAGE6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMAGE1,
    title: 'This is a portfolio item title',
    github: '#',
    live: '#'
  },

  {
    id: 2,
    image: IMAGE2,
    title: 'This is a portfolio item title',
    github: '#',
    live: '#'
  },

  {
    id: 3,
    image: IMAGE3,
    title: 'This is a portfolio item title',
    github: '#',
    live: '#'
  },

  {
    id: 4,
    image: IMAGE4,
    title: 'This is a portfolio item title',
    github: '#',
    live: '#'
  },

  {
    id: 5,
    image: IMAGE5,
    title: 'This is a portfolio item title',
    github: '#',
    live: '#'
  },

  {
    id: 6,
    image: IMAGE6,
    title: 'This is a portfolio item title',
    github: '#',
    live: '#'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What I Have Done</h5>
      <h2>My Portfolio</h2>


      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, live }) => {
            return<article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn'>Github</a>
              <a href={live} className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        })
        }
      </div>
    </section>
  )
}

export default Portfolio