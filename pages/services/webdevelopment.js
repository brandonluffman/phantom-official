import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'
import ServiceCards from '../../components/ServiceCards'
import WebServices from '../../components/WebServices'
import { MdAnalytics, MdDraw,MdDeveloperMode, MdOutlineSpeed } from 'react-icons/md'
import { SiMicrostrategy } from 'react-icons/si'
import { GrDeploy } from 'react-icons/gr'

const webdevelopment = () => {
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
          <title>Phantom Technologies | Website Development</title>
          <meta name="description" content="Looking for website development services? With years of experience, Phantom Technologies provides custom web development services to help you reach more leads."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/services/webdevelopment"/>
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
      <div className='dev-container'>
        <div className='dev-landing'>
          <div>
          <p className='dev-landing-subheader'>Service</p>
          <hr className='dev-hr'></hr>
          <h1 className='dev-landing-header'>Website Development</h1>    
          </div>
        </div>
        <div className='seo-page-desc-div tech-stack-div'>
          <h2 className='tech-stack-header'>Our Tech Stack</h2>
          <hr className='stack-hr'></hr>
          <div className='stack-grid'>
            <div className='stack-item'>
            <img src='/react.png' alt='Tech Stack Item' className='stack-grid-img'/>
            <h2>React.js</h2>
            </div>
            <div className='stack-item'>
            <img src='/node.png' alt='Tech Stack Item' className='stack-grid-img node-img'/>
            <h2>Node.js</h2>  
            </div>
            <div className='stack-item'>  
            <img src='/html.png' alt='Tech Stack Item' className='stack-grid-img'/>
            <h2>HTML</h2>
            </div>
            <div className='stack-item'>
            <img src='/css.png' alt='Tech Stack Item' className='stack-grid-img css-img'/>
            <h2>CSS</h2>
            </div>
            <div className='stack-item'>
            <img src='/js.png' alt='Tech Stack Item' className='stack-grid-img js-img'/>
            <h2>Javascript</h2>
            </div>
          </div>
        </div>
        <div>
        <div className='service-attributes'>
              <p className='serv-attributes-header web-serv-att'>Our Development Process</p>
              <div className='development-phases web-dev-phases'>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 1</p>
                <MdAnalytics className='phase-icon dev-icon' />
                <p className='dev-phase-name dev-name-web'>Research & Analysis</p>
                <hr className='phase-hr'></hr>
                {/* <p className='dev-phase-desc web-phase-desc'>Before developing a website, it is important to conduct thorough research and analysis to ensure that the website meets the needs of its target audience and achieves its goals. The research process typically begins with identifying the target audience, their needs and goals, and any pain points or challenges they may face. This can be done through surveys, focus groups, or other methods of gathering user feedback. Once a clear understanding of the target audience has been established, competitor analysis can be conducted to understand what similar websites are doing well, and where there may be opportunities for differentiation. Additionally, It is also important to conduct a content audit to understand what content will be needed on the website and how it should be structured. After this research process, the data should be analyzed in order to make informed decisions about the design, development, and marketing of the website. With this information, a website development team can create a comprehensive website development plan that will help ensure the website&apos;s success.</p> */}
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 2</p>
                <SiMicrostrategy className='phase-icon dev-icon' />
                <p className='dev-phase-name dev-name-web'>Planning & Strategy</p>
                <hr className='phase-hr'></hr>
                {/* <p className='dev-phase-desc web-phase-desc'>Before developing a website, it is important to have a clear plan and strategy in place. This planning process begins with setting specific, measurable goals for the website, such as increasing sales or improving user engagement. Once the goals have been established, a comprehensive website development plan can be created, outlining the key features, functionality, and design elements that will be needed to achieve these goals. This plan should also take into account the target audience and their needs, as well as any technical or regulatory requirements that must be met.</p> */}
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 3</p>
                <MdDraw className='phase-icon dev-icon' />
                <p className='dev-phase-name dev-name-web'>Design</p>
                <hr className='phase-hr'></hr>
                {/* <p className='dev-phase-desc web-phase-desc'>Before developing a website, the design process is crucial in creating a visually appealing and user-friendly website that aligns with the goals and target audience. The design process typically begins with creating wireframes or mockups of the website layout, which are used to map out the structure and organization of the website&apos;s content. Once the wireframes have been approved, the next step is to create a visual design, which includes the color palette, typography, imagery and overall aesthetic of the website.</p> */}
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 4</p>
                <MdDeveloperMode className='phase-icon dev-icon' />
                <p className='dev-phase-name dev-name-web'>Development</p>
                <hr className='phase-hr'></hr>
                {/* <p className='dev-phase-desc web-phase-desc'>The development process for creating a website involves a number of steps to turn the design and plans into a functional website. The first step in the development process is to create a development environment and set up the necessary tools and technologies. Next, the development team will create the necessary files and folders, and begin coding the website. This includes coding the front-end, which is the visible part of the website that users interact with, and the back-end, which is the server-side logic and database management.</p> */}
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 5</p>
                <MdOutlineSpeed className='phase-icon dev-icon' />
                <p className='dev-phase-name dev-name-web'>Testing</p>
                <hr className='phase-hr'></hr>
                {/* <p className='dev-phase-desc web-phase-desc'>The testing phase of website development is an important step to ensure that the website is functioning correctly and meets the requirements and standards set out in the development plan. The testing process includes a variety of techniques such as unit testing, integration testing, system testing and acceptance testing.</p> */}
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 6</p>
                <GrDeploy className='phase-icon dev-icon' />
                <p className='dev-phase-name dev-name-web'>Deployment</p>
                <hr className='phase-hr'></hr>
                {/* <p className='dev-phase-desc web-phase-desc'>The deployment phase of web development is the process of making the website live and accessible to the public. This involves several steps such as configuring the production environment, updating the DNS settings, and transferring the website files to the production server. Additionally, security measures such as SSL certificates and firewalls should be implemented to ensure the website is secure.</p> */}
                </div>
              </div>
            </div>
        </div>
        <div className='dev-build'>
          <h2 className='dev-build-header'>What We Build</h2>
          <WebServices />
        </div>
        <div className='dev-portfolio'>
          <h2 className='dev-portfolio-header'>Take a look at some work we did for our clients</h2>
          <hr className='stack-hr'></hr>
          <div className='portfolio-grid'>
        <div className='portfolio-item goldshield-portfolio'>
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
        <div className='ready-div'>
        <div className='ready-container'>
        <p className='ready-header'>Ready To Start A Project?</p>
        <button className='ready-btn' type='button'>Start Here<BsArrowRight className='arrow-icon book-arrow' /></button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default webdevelopment