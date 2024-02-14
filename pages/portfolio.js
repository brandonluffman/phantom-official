import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import {BsArrowRight} from 'react-icons/bs';
import Link from 'next/link';
import { GoPrimitiveDot } from 'react-icons/go';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';


const portfolio = () => {
  return (
    <div>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W3Q83E2JE3"/>
            <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-W3Q83E2JE3', {
                    page_path: window.location.pathname,
                  });
                `,
                }}
            />
       <Head>
          <title>Phantom | Portfolio</title>
          <meta name="description" content="Take a look at some work we did for our clients."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" />
          <link rel="apple-touch-icon" href="/static/images/favicon.ico" /> 
          <link rel="canonical" href="https://phantomdm.com/portfolio"/>
            <meta property="og:type" content="article" />
            <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
            <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
            <meta property="og:image" content="LINK TO THE IMAGE FILE" />
            <meta property="og:url" content="PERMALINK" />
            <meta property="og:site_name" content="SITE NAME" />
            <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
            <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />
            <meta name="twitter:image" content="LINK TO IMAGE" />
            <meta name="twitter:site" content="@USERNAME" />
            <meta name="twitter:creator" content="@USERNAME" />
      </Head>
      <Nav />
    <div className='portfolio-container'>
      <div className='portfolio-headers'>
      <h1 className='portfolio-header'>AI Projects Built with Purpose</h1>
      <h3 className='portfolio-subheader'>Phantom partners with clients to develop custom business solutions using Artificial Intelligence. We work with an array of clients, focused on developing solutions that maximize revenue and increase operational efficiency.</h3>
      <hr className='portfolio-top-horizontal'></hr>
      </div>
      <div className='portfolio-grid'>
        {/* <div className='portfolio-item goldshield-portfolio'>
        <div className='portfolio-graphic-container'>
           <img className='portfolio-item-graphic' src='/goldshield-portfolio.webp' alt='Client Work Portfolio' />
          </div>
          <div className='portfolio-img-container'>
           <img className='portfolio-item-img' src='/goldshield-logo.webp' alt='Client Logo' />
          </div>
          <div className='portfolio-text-container'>
            <p className='portfolio-text-header'>Gold Shield</p>
            <p className='portfolio-text-content'>Site redevelopment focused on Technical SEO optimization and boosting local leads within Gold Shield&apos;s servicing locations.</p>
          </div>
          <hr className='portfolio-horizontal-line'></hr>
          <div className='portfolio-btn-div'>
          <a href="https://goldshield.vercel.app" target='_blank' rel='noreferrer'><button type='button' className='portfolio-item-btn'>View case study <BsArrowRight className='portfolio-arrow'/></button></a>
          </div>
        </div> */}

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
    <Footer />
    </div>
  )
}

export default portfolio