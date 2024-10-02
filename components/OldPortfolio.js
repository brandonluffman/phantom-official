import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const OldPortfolio = () => {
  return (
    <div className='portfolio-container'>
    <div className='portfolio-headers'>
    <h1 className='portfolio-header'>AI Projects Built with Purpose</h1>
    <h3 className='portfolio-subheader'>Phantom partners with clients to develop custom business solutions using Artificial Intelligence. We work with an array of clients, focused on developing solutions that maximize revenue and increase operational efficiency.</h3>
    <hr className='portfolio-top-horizontal'></hr>
    </div>
    <div className='portfolio-grid'>

<div className='portfolio-item'>
        <div className='portfolio-graphic-container'>
            <img className='portfolio-item-graphic' src='/ranki-min.png' alt='Client Work Portfolio' />
        </div>
        <div className='portfolio-img-container'>
            <img className='portfolio-item-img' src='/ranki.png' alt='Client Logo' />
        </div>
        <div className='portfolio-text-container'>
          <p className='portfolio-text-header'>Ranki</p>
          <p className='portfolio-text-content'>Web application allowing users the ability to generate automated blog posts through Artificial Intelligence.</p>
        </div>
        <hr className='portfolio-horizontal-line hr-dark'></hr>
        <div className='portfolio-btn-div'>
          <a href="https://ranki.ai" target='_blank' rel='noreferrer'><button type='button' className='portfolio-item-btn'>Try the app <BsArrowRight className='portfolio-arrow'/></button></a>
          </div>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-graphic-container'>
            <img className='portfolio-item-graphic' src='/venum-min.png' alt='Client Work Portfolio' />
        </div>
        <div className='portfolio-img-container'>
            <img className='portfolio-item-img' src='/ranki.png' alt='Client Logo' />
        </div>
        <div className='portfolio-text-container'>
          <p className='portfolio-text-header'>Venum</p>
          <p className='portfolio-text-content'>AI Powered Investment Analytics for the financial markets.</p>
        </div>
        <hr className='portfolio-horizontal-line hr-dark'></hr>
        <div className='portfolio-btn-div'>
          <a href="https://venum.vercel.app" target='_blank' rel='noreferrer'><button type='button' className='portfolio-item-btn'>Try the app <BsArrowRight className='portfolio-arrow'/></button></a>
          </div>
      </div>



        <div className='portfolio-item goldshield-portfolio'>
          <div className='portfolio-graphic-container'>
          <img className='portfolio-item-graphic' src='/resumebuilder-min.png' alt='Client Work Portfolio' />
          </div>
          <div className='portfolio-img-container'>
          <img className='portfolio-item-img' src='/ranki.png' alt='Client Logo' />
          </div>
          <div className='portfolio-text-container'>
            <p className='portfolio-text-header'>ResumeBuilderAI</p>
            <p className='portfolio-text-content'>Application centered around helping users build resumes, tailored for a particular job listing using Artificial Intelligence to increase the likelihood of receiving an interview.</p>
          </div>
          <hr className='portfolio-horizontal-line'></hr>
          <div className='portfolio-btn-div'>
          <a href="https://theresumebuilderai.com" target='_blank' rel='noreferrer'><button type='button' className='portfolio-item-btn'>Try the app <BsArrowRight className='portfolio-arrow'/></button></a>
          </div>
      </div>


      <div className='portfolio-item'>
        <div className='portfolio-graphic-container'>
            <img className='portfolio-item-graphic' src='/headshot-gen-min.png' alt='Client Work Portfolio' />
        </div>
        <div className='portfolio-img-container'>
            <img className='portfolio-item-img' src='/ranki.png' alt='Client Logo' />
        </div>
        <div className='portfolio-text-container'>
          <p className='portfolio-text-header'>HeadshotGeneratorAI</p>
          <p className='portfolio-text-content'>Application using the DALL-E API to generate headshots for users at a fraction of the cost.</p>
        </div>
        <hr className='portfolio-horizontal-line hr-dark'></hr>
        <div className='portfolio-btn-div'>
          <a href="https://headshotgeneratorai.com" target='_blank' rel='noreferrer'><button type='button' className='portfolio-item-btn'>Try the app <BsArrowRight className='portfolio-arrow'/></button></a>
          </div>
      </div>



    </div>
  </div>

  )
}

export default OldPortfolio