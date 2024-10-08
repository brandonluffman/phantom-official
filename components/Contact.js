import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCircleCheck, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {BsArrowRight} from 'react-icons/bs';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';
import {CiMapPin} from 'react-icons/ci';
import {TfiLocationPin} from 'react-icons/tfi';
import Link from "next/link";
import AlertBanner from './AlertBanner';


const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
    setAlertMessage('Thanks for reaching out!');
    setTimeout(() => {
      setAlertMessage('');
    }, 2000);
    form.current.reset();
  };

  return (
    <div className="contact-form-div">
      <form ref={form} onSubmit={sendEmail} className='contact-form' id='myForm'>
        {/* <h4 className="contact-form-header">Contact Us</h4> */}
        <label className='contact-form-item name-label'>Name</label>
        <input type="text" name="user_name" className='contact-form-item name-input'  placeholder="Enter Your Name" required />
        <label className='contact-form-item email-label'>Email</label>
        <input type="email" name="user_email" className='contact-form-item email-input' placeholder="Enter Your Email" required />
        <label className='contact-form-item message-label'>Message</label>
        <textarea name="message" className='contact-form-item message-input' placeholder="How can we help?" />
        <input type="submit" value="Send" className='contact-form-item contact-form-btn' />
        <AlertBanner message={alertMessage} onClose={() => setAlertMessage('')} />

            {/* <div id="thank_you" style={{display: 'none'}}>
            <p onClick={closeBtn}>Thanks for reaching out!</p>
            </div>
            <div id="failure-msg" style={{display: 'none'}}>
            <p onClick={closeBtn}>Form failed, please try again.</p>
            </div> */}
      </form>
     
      <div className="contact-sides">
        <p className="contact-sides-header">Get in touch!</p>
        <div className="contact-info">
        <p className="contact-info-item"><GoMail className="contact-icon" /><a mailto='chris@goldshield.co'>info@phantomdm.com</a></p>
        {/* <p className="contact-info-item"><IoIosPhonePortrait className="contact-icon" />(203) 822-2311</p> */}
        <p className="contact-info-item"><TfiLocationPin className="contact-icon" /> New York, NY</p>
        </div>
        <p className="contact-book-text">Looking to start a project?</p>
        <Link href='/project'><button className='contact-book-btn' type='button'>Book Here <BsArrowRight className='arrow-icon'/></button></Link>
      </div>
      </div>
  );
};

export default Contact;

