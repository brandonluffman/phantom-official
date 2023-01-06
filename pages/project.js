import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProjectInquiry from '../components/ProjectInquiry';
import Head from 'next/head';
import Script from 'next/script';



const project = () => {

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
          <title>Phantom Technologies | Book A Project</title>
          <meta name="description" content="Book a web develpoment project or SEO campaign to jumpstart your business."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/project"/>
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
    <ProjectInquiry />
    <Footer />
    </div>
  )
}

export default project;