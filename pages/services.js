import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ServiceCards from '../components/ServiceCards';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Script from 'next/script';

const services = () => {
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
          <title>Phantom Technologies | Web Development & SEO Services</title>
          <meta name="description" content="Phantom Technologies offers a variety of Web Development and SEO Services focused on building credibility and generating traffic."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/services"/>
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
        <div className='services-page-container'>
            <div className='services-page-landing'>
              <div className='services-page-landing-div'>
              <h3 className='services-page-header'><span className='color-change'>Web Development</span> from small business <span className='color-change'>websites</span> to mass-scale <span className='color-change'>applications</span>.</h3>
              <AiOutlineArrowDown className='bounce' />
              </div>
            </div>
            <div className='services-page-category-container'>
                <h6 className='services-page-subheader'>Services</h6>
                <hr className='subheader-hr'></hr>
                <h2 className='services-page-category-header' id='webdev'>Web Development</h2>
                <ServiceCards />
            </div>
        </div>
      <Footer />
    </div>

  )
}

export default services;