import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter , } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';
import brandImg from '../public/img.png';



const Footer = () => {
  return (
    <div>
        <Helmet>
               <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' async defer></script>
            </Helmet>
    
    <footer className="footer">
      <div className="container-fluid footer-container" id="services">
        <div className="row footer-contact-row">
          <div className="col footer-contact-col">
            <div className='footer-brand-img'>
              <img
                src='/img.png'
                alt="Logo"
                width='100px'
                height='100px'
              />
            </div>
            <div className='social-icons'>
            <a href='https://twitter.com/PhantomDigi' target='_blank' rel='noreferrer'><FontAwesomeIcon className="fa-brands fa-twitter social-icon" icon={faTwitter}></FontAwesomeIcon></a>
 
            <a href='https://www.facebook.com/100084723462596/' target='_blank' rel='noreferrer'><FontAwesomeIcon className="fa-brands fa-facebook social-icon" icon={faFacebookF}><a href='https://www.linkedin.com/company/phantom-seo-web-design/'></a></FontAwesomeIcon></a>

            <a href='https://www.instagram.com/phantomseo/' target='_blank' rel='noreferrer'><FontAwesomeIcon className="fa-brands fa-instagram social-icon" icon={faInstagram}><a href='https://www.linkedin.com/company/phantom-seo-web-design/'></a></FontAwesomeIcon></a>

            <a href='https://www.linkedin.com/company/phantom-seo-web-design/' target='_blank' rel='noreferrer'><FontAwesomeIcon className="fa-brands fa-linkedin social-icon" icon={faLinkedinIn}><a href='https://www.linkedin.com/company/phantom-seo-web-design/'></a></FontAwesomeIcon></a>
            </div>
          </div>
          <div className="col footer-newsletter-col">
            <h6 className="newsletter-header">Join Our Newsletter</h6>

        
            <div id="mc_embed_signup">
                                  <form
                                    action="https://phantomdm.us13.list-manage.com/subscribe/post?u=959287c9f7e1348a8ccdf3620&id=d58bbac62f&f_id=00f6dce2f0"
                                    method="post"
                                    id="mc-embedded-subscribe-form"
                                    name="mc-embedded-subscribe-form"
                                    className="validate form-div"
                                    target="_blank"
                                    noValidate=""
                                  >
                                    <div id="mc_embed_signup_scroll">
                                      <input
                                        type="email"
                                        defaultValue=""
                                        name="EMAIL"
                                        className="required email"
                                        id="mce-EMAIL"
                                        placeholder='Enter Your Email Here'
                                      />
                                    </div>
                                    
                                      <div className="clear foot">
                                        <input
                                          type="submit"
                                          
                                          value="Subscribe"
                                          name="subscribe"
                                          id="mc-embedded-subscribe"
                                          className="button subscribe-btn"
                                        />
                                      </div>

                                      <div id="mce-responses" className="clear foot">
                                      <div
                                        className="response"
                                        id="mce-error-response"
                                        style={{ display: "none" }}
                                        
                                      />
                                      <div
                                        className="response"
                                        id="mce-success-response"
                                        style={{ display: "none" }}
                                      />
                                    </div>{" "}
                                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                      <input
                                        type="text"
                                        name="b_959287c9f7e1348a8ccdf3620_d58bbac62f"
                                        tabIndex={-1}
                                        defaultValue=""
                                      />
                                    </div>
                                  </form>
                                  </div>

                                
          </div>
        </div>
        <div className="row footer-copyright-row">
          <div className="col">
            <p className="privacy-policy"><a className='privacy-policy-link' target='_blank' rel='noreferrer' href='https://www.privacypolicygenerator.info/live.php?token=fq9t1TiFaHOyzFbuoXruE8jyP4l8Fgdk'>Privacy Policy</a> | Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer