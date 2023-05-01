/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs';
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container Contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Parthgupta1803@gmail.com</h5>
            <a href="mailto:parthgupta1803@gmail.com" target='_blank' rel="noreferrer">Send A Message</a>
        </article>

        <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Message</h4>
            <h5>WhatsApp</h5>
            <a href="https://api.whatsapp.com/send?phone=+919662069931" target='_blank' rel="noreferrer">Send A Message</a>
        </article>
        </div>
        <form action="">
          <input type="text" name ="name" placeholder='Your Full Name' required/> 
          <input type="email" name ="email" placeholder='Your Email' required/>
          <textarea name='message' rows={7} placeholder='Your Message' required/> 
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>

  
  )
}

export default Contact