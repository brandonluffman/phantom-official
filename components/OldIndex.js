import React from 'react'

const OldIndex = () => {
  return (
    <div>
          {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W3Q83E2JE3"/>
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
        /> */}

         {/* <div className="container-fluid about-container" id="about">
          <div className="row about-row">
            <h3 className="container-header about-header">About Us</h3>
            <div className="about-content-div">
              <div className='about-imgs-div'>
              <Image src='/ghost-logo.png' className="about-img about-brand-img" alt='Company Logo' loading="lazy" width='75' height='100' />
              <h4 className='about-img-text'>Phantom is a world-class technology firm with deep domain expertise in building scalable, highly-responsive AI solutions. We employ an agile methodology and work closely with clients to ensure their success.</h4>
              </div>
              <div className='about-content-text-div'>
                  <p className='about-content-header'><b>ELEVATE</b> Your Business with Phantom</p>
                  <h3 className='about-content-p'>We are a team of experts who can help you develop, implement, and deploy AI-powered tools.</h3>
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
        </div> */}


        {/* <div className="container-fluid services-container" id="services">
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
                        <TbCircleDot className='subelement-icon home-subelement-icon'/><h2 className='service-subelement-name home-subelement-name'>Global SEO</h2>
                        </div>
                        </Link>
          </div>
          <hr className='portfolio-horizontal-line hr-dark'></hr>
          <div className='portfolio-btn-div'>
          <Link href='/services/#seo'><button type='button' className='portfolio-item-btn'><span className='dark-text'>Learn more </span><BsArrowRight className='portfolio-arrow arrow-dark'/></button></Link>
          </div>
        </div>
      </div> */}

            {/* <div className='service-attributes'>
              <p className='serv-attributes-header'>Our Development Process</p>
              <div className='development-phases'>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 1</p>
                <hr className='phaser-hr'></hr>
                <p className='dev-phase-name'>Research & Analysis</p>
                <MdAnalytics className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 2</p>
                <hr className='phaser-hr'></hr>
                <p className='dev-phase-name'>Planning & Strategy</p>
                <SiMicrostrategy className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 3</p>
                <hr className='phaser-hr'></hr>
                <p className='dev-phase-name'>Design</p>
                <MdDraw className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 4</p>
                <hr className='phaser-hr'></hr>
                <p className='dev-phase-name'>Development</p>
                <MdDeveloperMode className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 5</p>
                <hr className='phaser-hr'></hr>
                <p className='dev-phase-name'>Testing</p>
                <MdOutlineSpeed className='phase-icon' />
                </div>
                <div className='dev-phase'>
                <p className='phase-header'>Phase 6</p>
                <hr className='phaser-hr'></hr>
                <p className='dev-phase-name'>Deployment</p>
                <GrDeploy className='phase-icon' />
                </div>
              </div>
            </div>
          </div>
        </div> */}


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

{/* 
        <div className="container-fluid contact-container" id="contact">
          <p className="container-header contact-header">Get In Touch</p>
          <Contact />
        </div> */}
    </div>
  )
}

export default OldIndex