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

  console.log(posts);

  const [checked, setChecked] = React.useState(true);



  return (
    <>

            

      <Nav />



    <div className="container-fluid landing-container" id="home">
      <div className="row landing-row">
        <h3 className="landing-subheader">
          Phantom SEO &amp; Web Design
        </h3>
        
        <h1 className="landing-header">Websites That Convert</h1>
        <div className="landing-btns">
          <a href='#contact' ><button className="landing-btn launch-btn">Launch Your Business</button></a>
          <a href='#about' ><button className="landing-btn learn-btn">Learn More</button></a>
        </div>
      </div>
    </div>




    <div className="container-fluid about-container" id="about">
      <div className="row about-row">
        <h3 className="container-header about-header">About Phantom</h3>
        <div className="about-content-div">
          <div className='about-imgs-div'>
          <img src='/img.png' className="about-img about-brand-img" alt='logo' />
          </div>
          <div className='about-content-text-div'>
              <h4 className='about-content-header'>Boost Your Business with Phantom</h4>
              <p className='about-content-p'>Phantom is a Professional SEO Optimization and Web Development firm dedicated to boosting lead generation for businesses.</p>
              <hr className='about-content-line'></hr>
              <div className='about-content-cards'>
                <div className='about-content-card'>
                  <FontAwesomeIcon className="fa-solid fa-check-circle about-content-card-icon rocket-icon" icon={faRocket} />
                  <h6 className='about-content-card-header'>Boost Leads</h6>
                  <p className='about-content-card-p'>Draw higher quality and quantity of leads with the expertise of our SEO specialists.</p>
                </div>
                <div className='about-content-card'>
                <FontAwesomeIcon className="fa-solid fa-check-circle about-content-card-icon" icon={faCheckCircle} />
                  <h6 className='about-content-card-header'>Increase Traffic</h6>
                  <p className='about-content-card-p'>Amplify your current audiencce and hack your current traffic metrics with our expert Development team.</p>
                </div>
                <div className='about-content-card'>
                  <FontAwesomeIcon className="fa-solid fa-check-circle about-content-card-icon" icon={faHandshake} />
                  <h6 className='about-content-card-header'>Build Trust</h6>
                  <p className='about-content-card-p'>Increase brand credibility while maintaining a presence in the top positions of search rankings with a professionally developed website.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid work-container" id="work">
      <div className="row work-row">
        <h3 className="container-header work-header">Our Work</h3>
        <div className="hello">
          <div className='hello-img-div'>
            <img src='/EDITION.png' className="hello-img" alt='Client Service Overview'  />
            <div className='hello-text-div'>
              <h1 className="hello-name">Certi Candle Co.</h1>
              <h6 className="hello-industry">Ecommerce</h6>
            </div>
          </div>
          <p className="hello-p">
            Certi Candle Co. is a luxury candle company based out of New York City. Our development team crafted a sophisticated yet simple aesthetic to their website, akin to their brand design. With the help of our SEO specialists, the company has boosted traffic and their keywords remain dominant in the search rankings.
          </p>
          <div className="hello-link-div">
          <a href='https://certicandles.com' target="_blank" rel="noreferrer" className='hello-link'><FontAwesomeIcon className="fa-solid fa-arrow-right-from-square website-icon" icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid services-container" id="services">
      <div className="row">
        <h3 className="container-header testimonials-header" >Services</h3>
              <div className='service-cards'>
                <div className='service-card' id='seo'>
                  <FontAwesomeIcon className='service-icon' icon={faMagnifyingGlassChart} />
                  <h5 className='service-name'>SEO</h5>
                  <div className='service-tags'>
                  <span className='service-tag'>Local SEO</span>
                  <span className='service-tag'>Global SEO</span>
                  </div>
                  <p className='service-description'>Dominate the competition in search pages with our SEO campaigns. Our SEO campaigns are centered around exploiting the best tools, resources, and strategies in the industry to increase a websites visibility and traffic.</p>
                  <a href='#contact'><button className='service-btn'>Request a Free SEO Audit</button></a>
                </div>
                <div className='service-card' id='webdev'>
                <FontAwesomeIcon className='service-icon' icon={faCode} />
                  <h5 className='service-name'>Web Development</h5>
                  <div className='service-tags'>
                  <span className='service-tag'>Ecommerce</span>
                  <span className='service-tag'>Business</span>
                  </div>
                  <p className='service-description'>First impressions are crucial. Having a professionally developed website will increase the traffic to a website while building trust with your audience. Leave a lasting impression on potential leads with a professional website that stands out from the competition.</p>
                  <a href='#contact'><button className='service-btn'>Request a Free Website Audit</button></a>
                </div>
              </div>
        </div>
      </div>


   



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
    <div className="container-fluid contact-container" id="contact">
      <h3 className="container-header contact-header">Get In Touch</h3>
      <div className="row contact-row">
        <form action="contact.php" method="POST" className="contact-form">
          <div className="contact-group name-contact-group">
            <input
              type="text"
              id="name"
              name="firstname"
              placeholder="Name"
              className="contact-input"
              required=""
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="contact-input"
              required=""
            />
          </div>
          <div className="contact-group">
            <input
              type="text"
              id="subject"
              name="email"
              placeholder="Subject"
              className="contact-input"
              required=""
            />
          </div>
          <div className="contact-group">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="contact-input message-input"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="contact-group btn-group">
            <input
              type="submit"
              defaultValue="Send Message"
              className="contact-btn message-btn"
            />
          </div>
        </form>
      </div>
    </div>
    
    <Footer />

      </>

  );
}