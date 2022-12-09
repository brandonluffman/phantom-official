import React, { useState, Component, useEffect } from 'react';
import Head from 'next/head';
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Nav from '../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowUpRightFromSquare, faCircle, faCheckCircle, faCheck, faCode, faMagnifyingGlassChart, faEnvelopeCircleCheck, faHandshake, faRocket } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter , } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Script from 'next/script';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import $ from 'jquery';
import {Helmet} from "react-helmet";
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import IndexPage from '../components/IndexPage';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import {BsTools,BsFillAwardFill, BsAward, BsCursorFill} from 'react-icons/bs';
import { GrDeploy } from 'react-icons/gr';
import { MdDeveloperMode, MdOutlineSpeed, MdAnalytics, MdDraw } from 'react-icons/md';
import { SiMicrostrategy, SiAltiumdesigner } from 'react-icons/si';



const graphcms = new GraphQLClient(
"https://api-us-east-1.hygraph.com/v2/cl6ftpszc2n0f01uhbzh3cz7s/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      description
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
      tag {
        tagDrop
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}





export default function Home({ posts }) {


  const [checked, setChecked] = React.useState(true);

  return (
    <>
    <IndexPage />
      <Nav />
        <div className="container-fluid landing-container" id="home">
          <div className="row landing-row">
            <h3 className="landing-subheader">Phantom Technologies</h3>
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
              <img src='/img.png' className="about-img about-brand-img" alt='logo' loading="lazy" />
              </div>
              <div className='about-content-text-div'>
                  <h4 className='about-content-header'>ELEVATE Your Business with Phantom</h4>
                  <p className='about-content-p'>Leading Web Development firm with professional design and development experience. We build sophisticated websites and full-stack web applications.</p>
                  <hr className='about-content-line'></hr>
                   <div className='web-imgs-div'>
                  <div className='website-img web-img-1'></div>
                  <div className='website-img web-img-2'></div>
              </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid services-container" id="services">
          <div className="row">
            <h3 className="container-header testimonials-header">Services</h3>
            <div className='services-div'>
              <div className='business-website-div service-div'>
                <div className='service-img-div img-div-1'>
                <img src='../landing.png' className='service-img service-img-1'></img>
                </div>
                <div className='service-content'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <h2 className='service-header'>Business Websites</h2>
                <p className='service-description'>User-centered design that boosts lead generation and increases revenue.</p>
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/project'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
              </div>
              <div className='ecommerce-website-div service-div mobile-flip'>
                <div className='service-content service-content-flipped'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <h2 className='service-header'>Ecommerce Websites</h2>
                <p className='service-description'>Our Ecommerce specialists design and build high converting websites included with all modern Ecommerce features.</p>
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/project'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
                <div className='service-img-div img-div-2'>
                <img src='../ecommerce.jpeg' className='service-img service-img-2'></img>
                </div>
              </div> 
              <div className='ecommerce-website-div service-div'>
              <div className='service-img-div img-div-3'>
                <img src='../custom-web.jpeg' className='service-img service-img-3'></img>
                </div>
                <div className='service-content service-content'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <h2 className='service-header'>Custom Websites</h2>
                <p className='service-description'>Have a design in mind? Our developers will work effortlessly to provide you with a website fit to your specifications.</p>
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/project'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
              </div> 
              <div className='web-apps-div service-div mobile-flip'>
                <div className='service-content-flipped'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <h2 className='service-header'>Web Applications</h2>
                <p className='service-description'>Our Web App Development team builds full-stack web and front-end applications using modern tech stacks for innovative tech brands and companies.</p>
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/project'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
                <div className='service-img-div img-div-4'>
                <img src='../web-app.jpeg' className='service-img service-img-4'></img>
                </div>
              </div>
            </div>
            <div className='service-attributes'>
              <h6 className='serv-attributes-header'>Our Development Process</h6>
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

{/*
        <div className="container-fluid blog-container" id="blog">
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
            <Link href='/blogs'><button className='blog-link'>See All</button></Link>
          </div>
        </div>
*/}

        <div className="container-fluid contact-container" id="contact">
          <h3 className="container-header contact-header">Get In Touch</h3>
          <Contact />
        </div>
        <Footer />
    </>

  );
}