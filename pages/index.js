import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import BlogCard from '../components/BlogCard';
import Nav from '../components/Nav';
import Link from 'next/link';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import {GraphQLClient, gql} from 'graphql-request';
import { GrDeploy } from 'react-icons/gr';
import { MdDeveloperMode, MdOutlineSpeed, MdAnalytics, MdDraw } from 'react-icons/md';
import { SiMicrostrategy } from 'react-icons/si';
import { BsArrowRight } from 'react-icons/bs';
import { TbCircleDot } from 'react-icons/tb';
import { useAmp } from 'next/amp';




// const graphcms = new GraphQLClient(
// "https://api-us-east-1.hygraph.com/v2/cl6ftpszc2n0f01uhbzh3cz7s/master"
// );

// const QUERY = gql`
//   {
//     posts {
//       id
//       title
//       description
//       datePublished
//       slug
//       content {
//         html
//       }
//       author {
//         name
//         avatar {
//           url
//         }
//       }
//       coverPhoto {
//         publishedAt
//         createdBy {
//           id
//         }
//         url
//       }
//       tag {
//         tagDrop
//       }
//     }
//   }
// `;

// export async function getStaticProps() {
//   const { posts } = await graphcms.request(QUERY);
//   return {
//     props: {
//       posts,
//     },
//     revalidate: 30,
//   };
// }



export default function Home({ posts }) {
  const loadAmp = useAmp()



  return (
    <>
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
          <title>Phantom Technologies | Professional Website Development</title>
          <meta name="description" content="Phantom Technologies is a website development and design company with extensive experience building business websites, e-commerce websites, and web applications."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/"/>
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
        <div className="container-fluid landing-container" id="home">
          <div className="row landing-row">
            <h2 className="landing-subheader">Phantom Technologies</h2>
            <h1 className="landing-header">Websites That Convert</h1>
            <div className="landing-btns">
              <Link href='/project'><button className="landing-btn launch-btn">Start a Project</button></Link>
              <a href='#about'><button className="landing-btn learn-btn">About Us</button></a>
            </div>
          </div>
        </div>

        <div className="container-fluid about-container" id="about">
          <div className="row about-row">
            <h3 className="container-header about-header">About Us</h3>
            <div className="about-content-div">
              <div className='about-imgs-div'>
              <Image src='/img.png' className="about-img about-brand-img" alt='Company Logo' loading="lazy" width='300' height='300' />
              </div>
              <div className='about-content-text-div'>
                  <h4 className='about-content-header'>ELEVATE Your Business with Phantom</h4>
                  <p className='about-content-p'>Leading Web Development firm with professional design and development experience. We build sophisticated websites and full-stack web applications.</p>
                  <hr className='about-content-line'></hr>
                   <div className='web-imgs-div'>
                  <div className='website-img web-img-1' aria-label="Website Image"></div>
                  <div className='website-img web-img-2' aria-label="Website Image"></div>
              </div>
              <div className='portfolio-btn-div'>
              <Link href='/portfolio'><p className='view-portfolio-btn'>View our portfolio  <BsArrowRight /></p></Link>
              </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid services-container" id="services">
          <div className="row">
            <h3 className="container-header testimonials-header">Services</h3>
            
            <div className='portfolio-grid home-services-grid'>
        <div className='portfolio-item goldshield-portfolio'>
        <div className='portfolio-graphic-container home-service-graphic'>
           <Image className='portfolio-item-graphic home-item-graphic' src='/web-app.jpeg' alt='Web Development Services Background' width='350' height='250' />
          </div>
          <div className='portfolio-text-container'>
            <h2 className='portfolio-text-header home-service-header'>Web Development</h2>
            <h3 className='portfolio-text-content home-service-text'>Website Development & Design from small business websites to mass-scale applications.</h3>
                        <Link href='/services/#businesswebsites'>
                        <div className='service-subelement home-service-subelement'>
                            <TbCircleDot className='subelement-icon home-subelement-icon'/><h2 className='service-subelement-name home-subelement-name'>Business Websites</h2>
                        </div>
                        </Link>
                        <Link href='/services/#ecommercewebsites'>
                        <div className='service-subelement home-service-subelement'>
                        <TbCircleDot className='subelement-icon home-subelement-icon'/><h2 className='service-subelement-name home-subelement-name'>Ecommerce Websites</h2>
                        </div>
                        </Link>
                        <Link href='/services/#customwebsites'>
                        <div className='service-subelement home-service-subelement'>
                        <TbCircleDot className='subelement-icon home-subelement-icon'/><h2 className='service-subelement-name home-subelement-name'>Custom Websites</h2>
                        </div>
                        </Link>
                        <Link href='/services/#webapps'>
                        <div className='service-subelement home-service-subelement'>
                        <TbCircleDot className='subelement-icon home-subelement-icon'/><h2 className='service-subelement-name home-subelement-name'>Web Applications</h2>
                        </div>
                        </Link>
          </div>
          <hr className='portfolio-horizontal-line'></hr>
          <div className='portfolio-btn-div'>
          <Link href='/services/#webdev'><button type='button' className='portfolio-item-btn'>Learn more <BsArrowRight className='portfolio-arrow'/></button></Link>
          </div>
        </div>
        <div className='portfolio-item'>
        <div className='portfolio-graphic-container home-service-graphic'>
           <Image className='portfolio-item-graphic home-item-graphic' src='/seo-analytics.png' alt='SEO Services Background' width='300' height='250' />
          </div>
          <div className='portfolio-text-container'>
            <h2 className='portfolio-text-header home-service-header'>SEO</h2>
            <p className='portfolio-text-content home-service-text'>Site redevelopment focused on SEO optimization and boosting traffic with a higher search ranking.</p>
                        <Link href='/services/#localseo'>
                        <div className='service-subelement home-service-subelement'>
                        <TbCircleDot className='subelement-icon home-subelement-icon'/><h2 className='service-subelement-name home-subelement-name'>Local SEO</h2>
                        </div>
                        </Link>
                        <Link href='/services/#seo'>
                        <div className='service-subelement home-service-subelement'>
                        <TbCircleDot className='subelement-icon home-subelement-icon'/><h2 className='service-subelement-name home-subelement-name'>SEO</h2>
                        </div>
                        </Link>
          </div>
          <hr className='portfolio-horizontal-line hr-dark'></hr>
          <div className='portfolio-btn-div'>
          <Link href='/services/#seo'><button type='button' className='portfolio-item-btn'><span className='dark-text'>Learn more </span><BsArrowRight className='portfolio-arrow arrow-dark'/></button></Link>
          </div>
        </div>
      </div>

            <div className='service-attributes'>
              <h3 className='serv-attributes-header'>Our Development Process</h3>
              <div className='development-phases'>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 1</p>
                <p className='dev-phase-name'>Research & Analysis</p>
                <MdAnalytics className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 2</p>
                <p className='dev-phase-name'>Planning & Strategy</p>
                <SiMicrostrategy className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 3</p>
                <p className='dev-phase-name'>Design</p>
                <MdDraw className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 4</p>
                <p className='dev-phase-name'>Development</p>
                <MdDeveloperMode className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 5</p>
                <p className='dev-phase-name'>Testing</p>
                <MdOutlineSpeed className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 6</p>
                <p className='dev-phase-name'>Deployment</p>
                <GrDeploy className='phase-icon' />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="container-fluid blog-container" id="blog">
          <div className="row blog-row">
            <h3 className="container-header testimonials-header">Blog</h3>
            <main className='home-blog'>
            {posts.slice(-3).reverse().map((post) => (
              <BlogCard
                title={post.title}
                author={post.author}
                coverPhoto={post.coverPhoto}
                key={post.id}
                datePublished={post.datePublished}
                slug={post.slug}
                tag={post.tag}
                description={post.description}
                className='blog-card'
              />
            ))}
          </main>
          </div>
          <div className='see-more-row'>
          <Link href='/blogs'><p className='blog-btn'>View all blogs  <BsArrowRight /></p></Link>
          </div>
        </div> */}


        <div className="container-fluid contact-container" id="contact">
          <h3 className="container-header contact-header">Get In Touch</h3>
          <Contact />
        </div>
        <Footer />
    </>

  );
}