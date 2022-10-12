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
              <img src='/img.png' className="about-img about-brand-img" alt='logo' loading="lazy" />
              </div>
              <div className='about-content-text-div'>
                  <h4 className='about-content-header'>BOOST Your Business with Phantom</h4>
                  <p className='about-content-p'>Phantom is a Professional Web Development firm dedicated to providing quality websites to clients that maximize visibility.</p>
                  <hr className='about-content-line'></hr>
                  <div className='about-content-cards'>
                    <div className='about-content-card'>
                      <FontAwesomeIcon className="fa-solid fa-check-circle about-content-card-icon rocket-icon" icon={faRocket} />
                      <h6 className='about-content-card-header'>Boost Leads</h6>
                      <p className='about-content-card-p'>Draw higher quality and quantity of leads.</p>
                    </div>
                    <div className='about-content-card'>
                    <FontAwesomeIcon className="fa-solid fa-check-circle about-content-card-icon" icon={faCheckCircle} />
                      <h6 className='about-content-card-header'>Increase Traffic</h6>
                      <p className='about-content-card-p'>Amplify your current audience and hack your current traffic metrics.</p>
                    </div>
                    <div className='about-content-card'>
                      <FontAwesomeIcon className="fa-solid fa-check-circle about-content-card-icon" icon={faHandshake} />
                      <h6 className='about-content-card-header'>Build Trust</h6>
                      <p className='about-content-card-p'>Increase brand credibility while maintaining a presence in the top positions of search rankings.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid services-container" id="services">
          <div className="row">
            <h3 className="container-header testimonials-header" >Services</h3>
            <div className='services-div'>
              <div className='services-description'>
                <div className='service-desc-item'>
                  <h2 className='service-desc-header'>Business Websites</h2>
                  <div className='desc-group'>
                  <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>Passive Lead Generation with Clear Call to Action</p>
                  </div>
                  <div className='desc-group'>
                    <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>User & Mobile Friendly Design Functionality</p>
                  </div>
                </div>
                <div className='service-desc-item'>
                  <h2 className='service-desc-header'>Ecommerce Websites</h2>
                  <div className='desc-group'>
                  <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>Secure Checkout Integration with Stripe</p>
                  </div>
                  <div className='desc-group'>
                  <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>Seamless CMS System for Updating Product Data</p>
                  </div>
                </div>
                <div className='service-desc-item'>
                  <h2 className='service-desc-header'>Blogs</h2>
                  <div className='desc-group'>
                  <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>Tight Integration Of Relevant Social Media Channels</p>
                  </div>
                  <div className='desc-group'>
                  <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>Seamless CMS System for Adding, Editing, and Deleting Blogs.</p>
                  </div>
                </div>
                <div className='service-desc-item'>
                  <h2 className='service-desc-header'>Web Applications</h2>
                  <div className='desc-group'>
                  <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>Full-Stack Modern Web Application with Mobile First Interface</p>
                  </div>
                  <div className='desc-group'>
                  <FontAwesomeIcon className='desc-icon' icon={faCheckCircle} />
                    <p className='item-p'>Secure, Flexible, and Scalable Application That Meets Customer Demand</p>
                  </div>
                </div>
              </div>
              <div className='web-imgs-div'>
                  <div className='website-img web-img-1'></div>
                  <div className='website-img web-img-2'></div>
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