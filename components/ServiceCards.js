import React from 'react';
import Link from 'next/link';
import {TbCircleDot} from 'react-icons/tb';


const ServiceCards = () => {
  return (
    <div>

            <div className='business-website-div service-div'>
                <div className='service-img-div img-div-1'>
                <img src='../landing.png' className='service-img service-img-1' alt='Business Websites Background'></img>
                </div>
                <div className='service-content'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <div className='service-pricing'>
                <h2 className='service-header'>Business Websites</h2>
                        <p className='service-price'>$1,500 <span className='light-text'></span></p>
                </div>
                <p className='service-description'>User-centered design that boosts lead generation and increases revenue.</p>
                <div className='service-subelements'>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Lead Converting Landing Page</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Extensive Content Creation</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Professional UX/UI Design</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Mobile Responsive</p>
                        </div>
                </div>
               
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/services'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
              </div>

              <div className='ecommerce-website-div service-div mobile-flip'>
                <div className='service-content service-content-flipped'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <div className='service-pricing'>
                <h2 className='service-header'>Ecommerce Websites</h2>
                        <p className='service-price'>$10,000 <span className='light-text'></span></p>
                </div>
                <p className='service-description'>Our Ecommerce specialists design and build high converting websites included with all modern Ecommerce features.</p>
                <div className='service-subelements'>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>High Converting Landing</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Stripe & CMS Integration</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Professional UX/UI Design</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Mobile Responsive</p>
                        </div>
                </div>
                
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/services'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
                <div className='service-img-div img-div-2'>
                <img src='../ecommerce.jpeg' className='service-img service-img-2' alt='Ecommerce Websites Background'></img>
                </div>
              </div> 

              <div className='ecommerce-website-div service-div'>
              <div className='service-img-div img-div-3'>
                <img src='../custom-web.jpeg' className='service-img service-img-3' alt='Custom Websites Background' ></img>
                </div>
                <div className='service-content service-content'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <div className='service-pricing'>
                <h2 className='service-header'>Custom Websites</h2>
                        <p className='service-price'>$2,000 <span className='light-text'></span></p>
                </div>
                <p className='service-description'>Have a design in mind? Our developers will work effortlessly to provide you with a website fit to your specifications.</p>
                <div className='service-subelements'>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Fully Customizable</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Copy Creation</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Professional UX/UI Design</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Mobile Responsive</p>
                        </div>
                </div>
    
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/services'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
              </div> 

              <div className='web-apps-div service-div mobile-flip'>
                <div className='service-content-flipped'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <div className='service-pricing'>
                <h2 className='service-header'>Web Applications</h2>
                        <p className='service-price'>$25,000<span className='dark-text'>+</span></p>
                </div>
                <p className='service-description'>Our Web App Development team builds full-stack web and front-end applications using modern tech stacks for innovative tech brands and companies.</p>
                <div className='service-subelements'>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Full-Stack Professional Development</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>High Scalability</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Professional UX/UI Design</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Mobile Responsive</p>
                        </div>
                </div>
                
                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Project</button></Link>
                <Link href='/services'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
                <div className='service-img-div img-div-4'>
                <img src='../web-app.jpeg' className='service-img service-img-4' alt='Web Application Background'></img>
                </div>
              </div>

              <h2 className='services-page-category-header' id='seo'>SEO</h2>

              <div className='ecommerce-website-div service-div'>
                <div className='service-img-div img-div-3'>
                    <img src='../local-seo-img.webp' className='service-img service-img-3' alt='SEO Service Image'></img>
                </div>
                <div className='service-content service-content'>
                    <p className='service-subheader'>Service</p>
                    <hr className='service-hr'></hr>
                    <div className='service-pricing'>
                    <h2 className='service-header'>Local SEO</h2>
                        <p className='service-price'>$1,000 <span className='light-text'>/ mo</span></p>
                    </div>
                    <p className='service-description'>Looking to <b>dominate the search rankings in your area</b> and generate more traffic to your business? Optimize your Local SEO stategy with our expert SEO team trained to <b>rank your company above your competitors.</b></p>
                    <div className='service-subelements'>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>On-Page SEO</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Local Keyword Research</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Local Link Building</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Google My Business Optimization</p>
                        </div>   
                        
                    </div>
                    
                    <div className='service-btn-div'>
                            <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Campaign</button></Link>
                            <Link href='/services'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                    </div>
                </div>
              </div> 

              <div className='ecommerce-website-div service-div mobile-flip'>
                <div className='service-content service-content-flipped'>
                <p className='service-subheader'>Service</p>
                <hr className='service-hr'></hr>
                <div className='service-pricing'>
                        <h2 className='service-header'>Global SEO</h2>
                        <p className='service-price'>$2,000 <span className='light-text'>/ mo</span></p>
                </div>
                <p className='service-description'>Our SEO specialists will work in a coordinated effort to implement a campaign that will improve your websites search engine rankings.</p>
                <div className='service-subelements'>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>On-Page SEO</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Keyword Research</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Link Building</p>
                        </div>
                        <div className='service-subelement'>
                            <TbCircleDot className='subelement-icon'/><p className='service-subelement-name'>Content Creation</p>
                        </div>
                </div>

                <div className='service-btn-div'>
                <Link href='/project'><button type='button' className='service-btn service-project-btn'>Start a Campaign</button></Link>
                <Link href='/services'><button type='button' className='service-btn service-learn-btn'>Learn More</button></Link>
                </div>
                </div>
                <div className='service-img-div img-div-2'>
                <img src='../seo-score.webp' className='service-img service-img-2' alt='Local SEO Service Image'></img>
                </div>
              </div> 
    </div>
  )
}

export default ServiceCards