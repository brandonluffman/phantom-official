import React, { useState, useRef } from 'react'
import styled from "styled-components";
import { BsPaperclip } from 'react-icons/bs';
import emailjs from "@emailjs/browser";


const ProjectInquiry = () => {
    const inquiry = useRef();

    const closeBtn = (e) => {
      e.preventDefault();
      document.getElementById('thank_you').style.display = 'none';
    }
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_d3p9eul",
          "template_yrm1kdx",
          inquiry.current,
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
    <div>
     
    <div className='project-contact-container'>
    <form ref={inquiry} onSubmit={sendEmail} className='project-form'>
        <h6 className='project-header'>Hey, let's get to work. <span className='hand-emoji'>&#128075;</span></h6>
        <p className='project-subheader'>I'm interested in...</p>
        <div className='form-app-selection'>
            <div className="form-check">
                <label className='form-check-label' >
                    <input type="radio" name="react-tips" value="option1" defaultChecked className="form-check-input" />
                    Business Website
                </label>
            </div>
            <div className="form-check">
                <label htmlFor='test' className='form-check-label'>
                    <input type="radio" id='test' name="react-tips" value="option2" className="form-check-input"/>
                    Custom Website
                </label>
            </div>
            <div className="form-check">
                <label className='form-check-label'>
                    <input type="radio" name="react-tips" value="option3" className="form-check-input"/>
                    Ecommerce Website
                </label>
            </div>
            <div className="form-check">
                <label className='form-check-label'>
                    <input type="radio" name="react-tips" value="option4" className="form-check-input"/>
                    Web App
                </label>
            </div>
        </div>
        <div className='form-inputs'>
                <input type='text' placeholder='Your name' className='form-input'/><br></br>
                <input type='text' placeholder='Your email' className='form-input'/><br></br>
                <textarea placeholder='Tell us about your project' className='form-input'/>
        </div>
        <p className='project-subheader'>Project Budget (USD)</p>
        <div className='form-budget'>

                <div className="form-check">
                    <label className='form-check-label budget-label'>
                        <input type="radio" name="react-tips" id='test' value="option1" defaultChecked className="form-check-input"/>
                        1-2k
                    </label>
                </div>

                <div className="form-check">
                    <label className='form-check-label budget-label'>
                        <input type="radio" name="react-tips" value="option2" className="form-check-input"/>
                        2-5k
                    </label>
                </div>

                <div className="form-check">
                    <label className='form-check-label budget-label'>
                        <input type="radio" name="react-tips" value="option3" className="form-check-input"/>
                        5-10k
                    </label>
                </div>

                <div className="form-check">
                    <label className='form-check-label budget-label'>
                        <input type="radio" name="react-tips" value="option4" className="form-check-input"/>
                        10k+
                    </label>
                </div>

        </div>

        <div className='form-attachment'>
                <BsPaperclip className='paperclip-icon' /><input type='file' id='file-attachment' className='file-input' title=' ' />
        </div>

        <div className='form-button'>
                <button className='project-form-btn' type='submit'>Send Request</button>
        </div>
        <div id="thank_you" style={{display: 'none'}}>
            <p>Thanks for filling up the form!</p>
            <button type="submit" onClick={closeBtn}>Close</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default ProjectInquiry;