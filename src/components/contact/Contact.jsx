import React from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {BsMessenger} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nhx52dj', 'template_g9npsew', form.current, 'Kx6bFihTTEx2JBf-M')
      e.target.reset()
      
  };
  const notify = () => toast.info("Message sent!",{
    theme: "dark",
  });

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <AiOutlineMail className='contact__option-icon' />
            <h4> Email</h4>
            <h5>Basitzaman.25@gmail.com</h5>
            <a href="mailto:Basitzaman.25@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <BsMessenger className='contact__option-icon' />
            <h4> Messenger</h4>
            <h5>Basit Zaman</h5>
            <a href="https://m.me/basit.zaman1/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
            <h4> WhatsApp</h4>
            <h5>+917889548455</h5>
            <a href="https://wa.me/+917889548455" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit= {sendEmail}>
          <input type="text" name="name"  placeholder='Your Full name' required />
          <input type="email" name="email"  placeholder='Your Email' required/>
          <textarea name="message" rows='7' placeholder='Your Message' required> </textarea>
          <button type='submit' className='btn btn-primary'onClick={notify} >Send Message </button>
        </form>
      </div>
      
      <ToastContainer className="popup"/>

    </section>
    
  )
}

export default Contact