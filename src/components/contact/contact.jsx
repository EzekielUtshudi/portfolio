import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_nuphemi', 'template_e2eftwi', form.current, 'Y49sWcuhyr1zm1ZDd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>ezekielutshudi@gmail.com</h5>
            <a href='mailto:ezekielusthudi@gmail.com' target={'_blank'}>Send a message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine className='contact__icon' />
            <h4>Messenger</h4>
            <h5>Ezekiel Utshudi Eteta</h5>
            <a href='https://m.me/ezekiel.utshudi/' target={'_blank'}>Send a message</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__icon' />
            <h4>Whatsapp</h4>
            <h5>+27103333100</h5>
            <a href='https://api.whatsapp.com/send?phone+27640492784' target={'_blank'}>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form}>
          <input type={'text'} placeholder={'Full Name'} required />
          <input type={'email'} placeholder={'Email'} required />
          <textarea name={'message'} id=''  rows='10' placeholder={'Your Message'} required></textarea>
          <button className='btn btn-primary' type={'submit'}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact