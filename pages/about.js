import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaConnectdevelop, FaMap } from 'react-icons/fa';
import { FaMapPin }  from 'react-icons/fa';


const about = () => {
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
          <title>Phantom Technologies | About</title>
          <meta name="description" content="Phantom Technologies is a website development company with extensive experience building digital experiences for your business that rank on Google."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/about"/>
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
      <div className='about-page-container'>
        <div className='about-landing'>
          <div className='about-landing-headers'>
          <h2 className='about-landing-subheader'>PhantomAI</h2>
          <h1 className='about-landing-header'>AI <span className='rank-color'>Automation</span></h1>
          </div>
        </div>
        <div className='about-who'>
          
          <div className='who-link-div'>
            <div className='who-link'>
              <h2 className='who-header'>Who We Are</h2>
              <hr className='about-page-hr'></hr>
              <p className='who-desc'>PhantomAI is an AI Development Firm headquartered in Arlington, VA that provides the highest-quality Artifical Intelligence solutions to businesses of all sizes. We are committed to helping our clients achieve their goals, and we will work with you until you see results. Our team is made up of experts who have years of experience in software development, data engineering, and machine learning. We have seen what works and what doesn&apos;t for companies, so we know how to help you reach your target audience. Our mission is to make sure that your business exceeds it&apos;s goals.</p>
            </div>
            {/* <div className='who-link'>
              <h2 className='who-header'>Who We Are</h2>
              <hr className='about-page-hr'></hr>
              <p className='who-desc'>Phantom Technologies is a website development company that provides the highest-quality digital marketing services for businesses of all sizes. We are committed to helping our clients achieve their goals, and we will work with you until you see results.We offer local SEO, SEO, and website development solutions to help your business grow. Our team is made up of industry experts who know how to get results. Our process starts with a consultation where we will discuss your needs and goals for your website or online presence. We&apos;ll then work with you to develop a plan that meets those goals and fits within your budget constraints. Then we get to work! Our team will monitor analytics and track progress along the way, so you can see the impact of our efforts as they happen in real time.</p>
            </div> */}
          </div>
          <div className='who-img-div'>
            <img src='/about-1.jpeg' alt='About Image' className='who-img'></img>
          </div>
        </div>
        <div className='about-middle'>
            <div className='about-middle-icons'>
              <div>
              <FaConnectdevelop className='about-middle-icon'/>
              <h2>Big Data Allocation</h2>
              </div>
              <div>
                <AiOutlineGlobal className='about-middle-icon'/>
              <h2>Custom AI Solutions</h2>
              </div>
              <div>
                <FaMapPin className='about-middle-icon'/>
              <h2>API Development</h2>
              </div>
            </div>
        </div>
        <div className='about-what'>
        <div className='who-link-div'>
            <div className='who-link'>
              <h2 className='who-header'>What We Do</h2>
              <hr className='about-page-hr'></hr>
              <p className='who-desc'>At Phantom we offer AI Development solutions to help your business grow. Our team is made up of industry experts who know how to get results. Our process starts with a consultation where we will discuss your needs and goals. We&apos;ll then work with you to develop a plan that meets those goals and fits within your budget constraints. Then we get to work! Our team will monitor analytics and track progress along the way, so you can see the impact of our efforts as they happen in real time.</p>
            </div>
            {/* <div className='who-link'>
              <h2 className='who-header'>What We Do</h2>
              <p className='who-desc'>Hello</p>
            </div> */}
          </div>
          <div className='who-img-div'>
          <img src='/clients.webp' alt='About Image' className='what-img'></img>
          </div>
        </div>
        <div className='about-we'>
          <div className='we-div'>
          <h2 className='we-header'>Solutions Built to <span className='we-color'>Dominate</span> the Competition</h2>
          <p className='we-desc'>Our team is here to help you achieve your goals. We&apos;re a group of developers who believe in the power of AI and it&apos;s ability to bring companies to their financial goals. We also believe in the importance of building long-term relationships with our clients—not just delivering results but also providing ongoing support as your business grows and changes over time.</p>
          <button type='button' className='we-btn'>Let&apos;s get started <BsArrowRight /></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default about