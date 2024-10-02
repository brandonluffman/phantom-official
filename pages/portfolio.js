import React,{useEffect} from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import {BsArrowRight, BsCaretDown, BsCaretDownFill} from 'react-icons/bs';
import Link from 'next/link';
import { GoPrimitiveDot } from 'react-icons/go';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Portfolio from '../components/Portfolio';
import PortfolioLanding from '../components/PortfolioLanding';


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
        <PortfolioLanding />
       <Portfolio />
      <Footer />
      </div>
  )
}

export default portfolio