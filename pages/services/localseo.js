import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/Footer'
import Nav from '../../components/Nav';
import { BsArrowRight } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';


const localseo = () => {
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
          <title>Phantom Technologies | Local SEO</title>
          <meta name="description" content="Looking for Local SEO services? With years of experience, Phantom Technologies provides Local SEO services to help you reach your local audience."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/services/localseo"/>
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
      <div className='seo-page-container'>
      <div className='local-seo-landing'>
          <div>
        <p className='seo-landing-subheader'>Service</p>
          <hr className='seo-landing-hr'></hr>
        <h1 className='seo-landing-header'>Local SEO</h1>
        </div>
        </div>
        <div className='seo-page-content'>
        <h3 className='seo-content-header'>How <span className='seo-color'>Local SEO</span> Can Boost Your Business</h3>
          <div className='seo-content-div'>
          <div className='seo-content-content'>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Leads to More Customers</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>More High Converting Traffic</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Build Trust and Credibility</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Increased ROI</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Provides Your Business Long-Lasting Results</h6>
          </div>
          <img className='seo-content-img' src='/local-seo-img.webp' alt='Service Image'></img>
          </div>
        </div>
        {/* <div className='seo-page-desc-div'>
          <h2 className='seo-desc-header'>What We Do</h2>
          <div className='seo-page-grid'>
            <div className='seo-grid-item'>
            <h2>Google My Business Optimization</h2>
            </div>
            <div className='seo-grid-item'>
            <h2>Local Keyword Research</h2>
            </div>
            <div className='seo-grid-item'>
            <h2>Local Link Building</h2>
            </div>
            <div className='seo-grid-item'>
            <h2>Content Creation</h2>
            </div>
            <div className='seo-grid-item'>
            <h2>Technical SEO</h2>
            </div>
            <div className='seo-grid-item'>
            <h2>Monthly Reporting</h2>
            </div>
          </div>
        </div> */}
        <div className='seo-page-what-div'>
        <h2 className='seo-desc-header'>What We Do</h2>
          <div className='seo-what-item'>
            <div className='seo-what-img-div'>
              <img src='/gmb.jpeg' alt='SEO Image' className='seo-what-img'></img>
            </div>
            <div className='seo-what-content'>
            <p>01</p>
            <h2>Google My Business Optimization</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Local Link building for local SEO involves acquiring backlinks to your website from other local websites or directories. These backlinks can help improve your website&apos;s visibility and search engine rankings for local search terms. </p>
            </div>
          </div>
          <div className='seo-what-item'>
            <div className='seo-what-img-div'>
            <img src='/keyword.png' alt='SEO Image' className='seo-what-img'></img>
            </div>
          <div className='seo-what-content'>
            <p>02</p>
            <h2>Local Keyword Research</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Local Keyword research for local SEO involves identifying the keywords and phrases that potential customers in your local area are searching for when looking for products or services similar to those that you offer. Once you have identified these keywords, you can optimize your website and online content (e.g. blog posts, business listings, etc.) to rank well for those terms in local search results.</p>
            </div>
          </div>
          {/* <div className='seo-what-item'>
          <div className='seo-what-content'>
            <p>03</p>
            <h2>On-Page SEO</h2>
            <p>On-page SEO for local SEO involves optimizing the content and structure of your website to improve its visibility and rankings for local search terms. By optimizing your website in these ways, you can make it more appealing to both search engines and local customers, and increase your chances of ranking well for local search terms.</p>
            </div>
            <img src='/placement.png' alt='SEO Image' className='seo-what-img'></img>
          </div> */}
          <div className='seo-what-item'>
            <div className='seo-what-img-div'>
            <img src='/linkbuilding.png' alt='SEO Image' className='seo-what-img'></img>
            </div>
            <div className='seo-what-content'>
            <p>03</p>
            <h2>Local Link Building</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Local Link building for local SEO involves acquiring backlinks to your website from other local websites or directories. These backlinks can help improve your website&apos;s visibility and search engine rankings for local search terms. </p>
            </div>
          </div>
          <div className='seo-what-item'>
            <div className='seo-what-img-div'>
            <img src='/content.jpeg' alt='SEO Image' className='seo-what-img'></img>
            </div>
          <div className='seo-what-content'>
            <p>04</p>
            <h2>Content Creation</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Content creation for local SEO involves creating and publishing high-quality, relevant, and valuable content that is tailored to your local audience. This can include blog posts, articles, videos, infographics, and more. The goal of creating this content is to provide value to your target audience, while also helping to improve your website&apos;s visibility and search engine rankings for local search terms. By creating high-quality, relevant, and valuable content, you can attract more visitors to your website, increase engagement and conversion, and ultimately improve your website&apos;s visibility and rankings in local search results.</p>
            </div>
          </div>
          <div className='seo-what-item'>
            <div className='seo-what-img-div'>
            <img src='/technical.png' alt='SEO Image' className='seo-what-img'></img>
            </div>
          <div className='seo-what-content'>
            <p>05</p>
            <h2>Technical SEO</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Technical SEO for local SEO involves optimizing the technical aspects of your website to improve its visibility and rankings for local search terms. By optimizing your website&apos;s technical aspects, you can improve its visibility and rankings for local search terms, as well as make it more accessible and user-friendly for local customers.</p>
            </div>
          </div>
          <div className='seo-what-item'>
            <div className='seo-what-img-div'>
            <img src='/monthly.svg' alt='SEO Image' className='seo-what-img'></img>
            </div>
            <div className='seo-what-content'>
            <p>06</p>
            <h2>Monthly Reporting</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Monthly reporting for local SEO involves regularly monitoring and analyzing the performance of your website&apos;s local SEO efforts, and providing detailed reports on your progress and results. The goal of these reports is to help you understand how your website is performing in local search results, and identify areas where you can make improvements.</p>
            </div>
          </div>
      </div>
      <div className='ready-div'>
        <div className='ready-container'>
        <p className='ready-header'>Ready To Start A Campaign?</p>
        <button className='ready-btn' type='button'>Let&apos;s get started <BsArrowRight className='arrow-icon book-arrow' /></button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default localseo