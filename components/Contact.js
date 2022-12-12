import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCircleCheck, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  const form = useRef();

  const closeBtn = (e) => {
    e.preventDefault();
    document.getElementById('thank_you').style.display = 'none';
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_maf7etb",
        "template_ckdsqpq",
        form.current,
        "q1bvSeQBMko2AZ2ax"
      )
      .then(
        (result) => {
          e.target.reset();
          document.getElementById('thank_you').style.display = 'block';
          setTimeout(function(){
            document.getElementById('thank_you').style.display = 'none';
         }, 2000);
        },
        (error) => {
          document.getElementById('failure-msg').style.display = 'block';
          setTimeout(function(){
            document.getElementById('failure-msg').style.display = 'none';
         }, 2000);
        }
      );
  };

  return (
    <div className="contact-form-div">
      <form ref={form} onSubmit={sendEmail} className='contact-form' id='myForm'>
        <h4 className="contact-form-header">Contact Us</h4>
        <label className='contact-form-item name-label'>Name</label>
        <input type="text" name="user_name" className='contact-form-item name-input'  placeholder="Enter Your Name" required />
        <label className='contact-form-item email-label'>Email</label>
        <input type="email" name="user_email" className='contact-form-item email-input' placeholder="Enter Your Email" required />
        <label className='contact-form-item message-label'>Message</label>
        <textarea name="message" className='contact-form-item message-input' placeholder="How can we help?" />
        <input type="submit" value="Send" className='contact-form-item contact-form-btn' />
            <div id="thank_you" style={{display: 'none'}}>
            <p onClick={closeBtn}>Thanks for reaching out!</p>
            </div>
            <div id="failure-msg" style={{display: 'none'}}>
            <p onClick={closeBtn}>Form failed, please try again.</p>
            </div>
      </form>
     
      <div className="contact-sides">
        <p>Not a fan of forms?</p>
      </div>
      </div>
  );
};

export default Contact;

