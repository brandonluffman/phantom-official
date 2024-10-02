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
import PageLoader from '../components/PageLoader';

export default function Home() {

  return (
    <>
    <Head>
          <title>Phantom | AI Driven Applications</title>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://www.phantomdm.com",
                "logo": "https://www.phantom.com/public/img.png"
              })}}
          />
          <meta name="description" content="Phantom Technologies is an AI firm that specializes in the development of data-driven applications."/>
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
            <h1 className="landing-subheader fade-in">Phantom</h1>
            <h2 className="landing-header fade-in">Investments & Innovation</h2>
            <div className="landing-btns">
              <Link href='/portfolio'><button className="landing-btn launch-btn fade-in">Our Portfolio</button></Link>
              <Link href='/portfolio'><button className="landing-btn learn-btn fade-in">Our Strategy</button></Link>
            </div>
          </div>
        </div>


        <Footer />
    </>

  );
}