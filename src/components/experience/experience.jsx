import React from 'react'
import './experience.css'
import{BsFillPatchCheckFill} from 'react-icons/bs'

export const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have </h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
             <div>
                <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div> 
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
         {/* End of Front-end development  */}
        <div className='experience__backend'>
          <h3>Backend development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                  <h4>Ruby</h4>
                  <small className='text-light'>Experienced</small>
              </div>   
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
            <div>
                <h4>Ruby On Rails</h4>
                <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                <h4>Posgres</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience-icon'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}
export default experience