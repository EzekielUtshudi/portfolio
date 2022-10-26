import React from 'react'
import CV from '../../assets/CV.doc'
import Resume from '../../assets/Resume.pdf'


export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
        <a href={Resume} className='btn' download>Download Resume</a>
    </div>
  )
}

export default CTA