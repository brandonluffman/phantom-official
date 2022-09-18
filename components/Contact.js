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
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          document.getElementById('thank_you').style.display = 'block';

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-div">
      <form ref={form} onSubmit={sendEmail} className='contact-form' id='myForm'>
        <h2 className="contact-form-header">Contact Us</h2>
        <label className='contact-form-item name-label'>Name</label>
        <input type="text" name="user_name" className='contact-form-item name-input'  placeholder="Enter Your Name" required />
        <label className='contact-form-item email-label'>Email</label>
        <input type="email" name="user_email" className='contact-form-item email-input' placeholder="Enter Your Email" required />
        <label className='contact-form-item message-label'>Message</label>
        <textarea name="message" className='contact-form-item message-input' placeholder="How can we help?" />
        <input type="submit" value="Send" className='contact-form-item contact-form-btn' />
            <div id="thank_you" style={{display: 'none'}}>
            <p>Thanks for filling up the form!</p>
            <button type="submit" onClick={closeBtn}>Close</button>
            </div>
      </form>
      <div className="contact-form-banner">
        <h3 className="contact-banner-name">Phantom SEO & Web Design</h3>
        <div className="contact-banner-check">
        <FontAwesomeIcon icon={faLocationDot}  className="contact-banner-icon" />
        <div className="contact-banner-ps">
        <p className="contact-banner-p-2">Location</p>
        <hr className="contact-banner-line"></hr>
        <p className="contact-banner-p">Austin, TX</p>
        </div>
        </div>
        <div className="contact-banner-check">
        <FontAwesomeIcon icon={faEnvelope}  className="contact-banner-icon"/>
        <div className="contact-banner-ps">
        <p className="contact-banner-p-2">Contact</p>
        <hr className="contact-banner-line"></hr>
        <p className="contact-banner-p">info@phantomdm.com</p>
        </div>
        </div>
        <div className="contact-banner-check">
        <FontAwesomeIcon icon={faCalendarDays}  className="contact-banner-icon"/>
        <div className="contact-banner-ps">
        <p className="contact-banner-p-2">Hours</p>
        <hr className="contact-banner-line"></hr>
        <p className="contact-banner-p">M - F  8:00 a.m. - 5:00 p.m. CST</p>
        </div>
        </div>
      </div>
     
      </div>
  );
};

export default Contact;

