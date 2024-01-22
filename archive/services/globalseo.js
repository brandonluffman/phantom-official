import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import {BsArrowRight} from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import Link from 'next/link';


const globalseo = () => {
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
          <title>Phantom Technologies | Global SEO</title>
          <meta name="description" content="Looking for Global SEO services? With years of experience, Phantom Technologies provides Global SEO services to help your business reach it's target audience."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/services/globalseo"/>
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
        <div className='seo-landing'>
          <div>
        <p className='seo-landing-subheader'>Service</p>
          <hr className='seo-landing-hr'></hr>
        <h1 className='seo-landing-header'>Global SEO</h1>
        </div>
        </div>
        <div className='seo-page-content'>
        <h3 className='seo-content-header'>How <span className='seo-color'>Global SEO</span> Can Boost Your Business</h3>
          <div className='seo-content-div'>
          <div className='seo-content-content'>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Leads to More Customers</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>More High Converting Traffic</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Build Trust and Credibility</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Increased ROI</h6>
          <h6 className='seo-content-item'><GoPrimitiveDot className='seo-dot'/>Provides Your Business Long-Lasting Results</h6>
          </div>
          <img className='seo-content-img' src='/localseographic.png' alt='Service Image'></img>
          </div>
        </div>
        {/* <div className='seo-page-desc-div'>
          <h2 className='seo-desc-header'>What We Do</h2>
          <div className='seo-page-grid'>
            <div className='seo-grid-item'>
            <p>01</p>
            <h2>Link Building</h2>
            </div>
            <div className='seo-grid-item'>
            <p>02</p>
            <h2>Keyword Research</h2>
            </div>
            <div className='seo-grid-item'>
            <p>03</p>
            <h2>On-Page SEO</h2>
            </div>
            <div className='seo-grid-item'>
            <p>04</p>
            <h2>Content Creation</h2>
            </div>
            <div className='seo-grid-item'>
            <p>05</p>
            <h2>Technical SEO</h2>
            </div>
            <div className='seo-grid-item'>
            <p>06</p>
            <h2>Monthly Reporting</h2>
            </div>
          </div>
        </div> */}
        <div className='seo-page-what-div'>
        <h2 className='seo-desc-header'>What We Do</h2>
          <div className='seo-what-item'>
            <div className='seo-what-content'>
            <p>01</p>
            <h2>Link Building</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Link building for SEO entails the process of acquiring backlinks (also known as <q>inbound links</q>) to a website from other websites. Backlinks are important for SEO because they indicate to search engines that other websites consider the content on the linked-to website to be valuable and relevant. The more high-quality backlinks a website has, the higher it is likely to rank in search engine results pages (SERPs). There are many ways to acquire backlinks, including: creating valuable content that other websites will want to link to, reaching out to other website owners and asking them to link to your content, and earning links through online PR or marketing campaigns.</p>
            </div>
            <div className='seo-what-img-div'>
            <img src='/linkbuilding.png' alt='SEO Image' className='seo-what-img'></img>
            </div>
          </div>
          <div className='seo-what-item'>
          <div className='seo-what-content'>
            <p>02</p>
            <h2>Keyword Research</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Keyword research for SEO entails the process of identifying and selecting keywords and phrases that potential customers use to search for products or services similar to those offered by a business. These keywords are then used to optimize a website&apos;s content, meta tags, and other elements to improve the visibility and ranking of the site in search engine results pages (SERPs) for those keywords.

The process of keyword research for SEO can involve several steps, such as:

Identifying the main topics and themes related to a business&apos;s products or services
Using keyword research tools to generate a list of relevant keywords and phrases
Analyzing the search volume, competition, and potential traffic for each keyword
Selecting the most relevant and high-potential keywords to target
Incorporating these keywords into the website&apos;s content, meta tags, and other elements in a natural and user-friendly manner.
By conducting keyword research and optimizing a website for relevant keywords, businesses can increase the chances of their website appearing in the top positions of search engine results pages (SERPs), thus increasing the visibility and traffic to their website.</p>
            </div>
            <div className='seo-what-img-div'>
            <img src='/keyword.png' alt='SEO Image' className='seo-what-img'></img>
            </div>
          </div>
          <div className='seo-what-item'>
          <div className='seo-what-content'>
            <p>03</p>
            <h2>On-Page SEO</h2>
            <hr className='seo-landing-hr'></hr>
            <p>On-page SEO (also known as <q>on-site SEO</q>) refers to the process of optimizing the content and structure of a website to improve its ranking in search engine results pages (SERPs) for relevant keywords. This includes optimizing the website&apos;s content, meta tags, images, and other elements to make it more search engine-friendly and to provide a better user experience.
On-page SEO typically entails several steps, such as:
Conducting keyword research to identify relevant keywords and phrases to target
Optimizing the website&apos;s meta tags, such as the title tag and meta description, to include these keywords
Creating high-quality, relevant, and informative content that includes the target keywords and provides value to the user
Organizing the website&apos;s content in a logical and user-friendly structure, using headings and subheadings to break up the text
Optimizing images and other media by compressing them and including descriptive file names and alt tags
Making sure that the website&apos;s URL structure and internal linking are logical and easy to navigate.
By optimizing the content and structure of a website, businesses can increase its visibility and ranking in SERPs, and drive more relevant traffic to their website.
</p>
            </div>
            <div className='seo-what-img-div'>
            <img src='/onpage.svg' alt='SEO Image' className='seo-what-img'></img>
            </div>
          </div>
          <div className='seo-what-item'>
          <div className='seo-what-content'>
            <p>04</p>
            <h2>Content Creation</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Content creation for SEO entails the process of creating high-quality, relevant, and informative content that is optimized for search engines and provides value to the user. This content is then used to attract and engage potential customers, increase website visibility and ranking in search engine results pages (SERPs), and drive relevant traffic to the website.

The process of content creation for SEO can involve several steps, such as:

Conducting keyword research to identify relevant keywords and phrases to target
Creating a content strategy that aligns with the overall business and marketing goals
Creating high-quality, well-written, and engaging content that includes the target keywords and provides value to the user
Optimizing the content for search engines by including keywords in the title, meta description, headings, and throughout the text in a natural and user-friendly manner
Using multimedia elements, such as images and videos, to enhance the user experience and to make the content more engaging
Regularly publishing new and updated content to keep the website fresh and to attract backlinks from other websites.
Creating high-quality and relevant content is an important part of SEO as it helps to attract and engage potential customers, increase website visibility and ranking in SERPs, and drive relevant traffic to the website.</p>
            </div>
            <div className='seo-what-img-div'>
            <img src='/content.jpeg' alt='SEO Image' className='seo-what-img'></img>
            </div>
          </div>
          <div className='seo-what-item'>
          <div className='seo-what-content'>
            <p>05</p>
            <h2>Technical SEO</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Technical SEO refers to the process of optimizing the technical aspects of a website to improve its visibility and ranking in search engine results pages (SERPs). It involves making sure that a website is properly configured, easily accessible and crawlable by search engine bots, and that it provides a good user experience.

Technical SEO typically entails several steps, such as:

Auditing a website&apos;s current technical setup to identify any issues that may be affecting its visibility and ranking in SERPs.
Ensuring that the website is properly configured, including setting up the correct domain name, using the correct file structure, and setting up redirects as necessary.
Making sure that the website is easily accessible and crawlable by search engine bots, by creating and submitting a sitemap and robot.txt file, and by ensuring that the website&aos;s URLs are well-structured and easy to navigate.
Optimizing the website&apos;s load speed and mobile-friendliness, which are known ranking factors for search engines
Ensuring that the website is properly secured by using HTTPS and a valid SSL certificate
Implementing schema markup to help search engines understand the content and context of the website
Monitoring website performance using analytics and search console data, and making adjustments as needed.
By addressing the technical aspects of a website, businesses can help to ensure that the website is easily discoverable by search engine bots and that it provides a good user experience. This can increase its visibility and ranking in SERPs, and drive more relevant traffic to the website.</p>
            </div>
            <div className='seo-what-img-div'>
            <img src='/technical.png' alt='SEO Image' className='seo-what-img'></img>
            </div>
          </div>
          <div className='seo-what-item'>
            <div className='seo-what-content'>
            <p>06</p>
            <h2>Monthly Reporting</h2>
            <hr className='seo-landing-hr'></hr>
            <p>Monthly reporting for SEO typically includes creating and providing a report that tracks the progress and performance of a website&apos;s SEO efforts over a period of one month. The report typically includes metrics such as:

Website traffic: The number of visitors to the website, where they came from, and which pages they visited.

Keyword rankings: The positions of the website&apos;s pages in search engine results pages (SERPs) for targeted keywords.

Backlinks: The number of backlinks to the website, where they came from, and their quality.

Organic search: The percentage of website traffic that comes from organic search.

Conversions: The number of conversions or desired actions taken on the website, such as contact form submissions or e-commerce sales.

Analytics data: such as bounce rate, time on page, pages/session, etc.

The report also includes an analysis of the data, discussing the progress and performance of the website, as well as any issues that have been identified, and recommendations for future optimization and improvement.

Monthly reporting for SEO helps businesses and website owners to keep track of the progress of their website&apos;s visibility and ranking in SERPs, and the effectiveness of the SEO strategy. It also help to identify the areas that are working well and areas that need improvement, and to make data-driven decisions on how to optimize and improve the website&apos;s SEO performance.</p>
            </div>
            <div className='seo-what-img-div'>
            <img src='/monthly.svg' alt='SEO Image' className='seo-what-img'></img>
            </div>
          </div>
      </div>
      <div className='ready-div'>
        <div className='ready-container'>
        <p className='ready-header'>Ready To Start A Campaign?</p>
        <Link href='/project'><button className='ready-btn' type='button'>Let&apos;s get started<BsArrowRight className='arrow-icon book-arrow' /></button></Link>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default globalseo