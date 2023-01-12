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
          <title>Phantom Technologies | Portfolio</title>
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
      <h1 className='portfolio-header'>Web projects built to maximize visibility</h1>
      <h3 className='portfolio-subheader'>Phantom partners with clients to design and develop custom business websites, platforms and experiences. We work with an array of clients, </h3>
      <hr className='portfolio-top-horizontal'></hr>
      {/* <div className='portfolio-partnerships-div'>
        <h6 className='portfolio-clients-splash'>Clients</h6>
        </div>
        <div className='portfolio-clients-div'>
        <h6 className='portfolio-partnerships'>Partnerships</h6>
      </div> */}
      </div>
      <div className='portfolio-grid'>
        <div className='portfolio-item goldshield-portfolio'>
        <div className='portfolio-graphic-container'>
           <img className='portfolio-item-graphic' src='/custom-web.jpeg' alt='Client Work Portfolio' />
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
        </div>
        <div className='portfolio-item'>
        <div className='portfolio-graphic-container'>
           <img className='portfolio-item-graphic' src='/custom-web.jpeg' alt='Client Work Portfolio' />
          </div>
        <div className='portfolio-img-container'>
           <img className='portfolio-item-img' src='/ranki.png' alt='Client Logo' />
          </div>
          <div className='portfolio-text-container'>
            <p className='portfolio-text-header'>RANKI</p>
            <p className='portfolio-text-content'>Web App focused on centralizing all aspects of a customers product search to make the product search process more efficient.</p>
          </div>
          <hr className='portfolio-horizontal-line hr-dark'></hr>
          <div className='portfolio-btn-div'>
          {/* <Link href='/portfolio/goldshield'><button type='button' className='portfolio-item-btn dark-text'>View case study <BsArrowRight className='portfolio-arrow arrow-dark'/></button></Link> */}
          <div className='in-development'>
            <div className='in-dev-container'>
            <GoPrimitiveDot className='in-dev-dot'/><p className='in-dev-text'>In Development</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default portfolio