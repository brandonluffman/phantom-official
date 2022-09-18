import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter , } from '@fortawesome/free-brands-svg-icons';
import NewsletterSubscribe from './NewsletterSubscribe';



const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="container-fluid footer-container" id="services">
        <div className="row footer-contact-row">
          <div className="col footer-contact-col">
              <div className='footer-brand-img'>
                <img src='/img.png' alt="Logo" width='150px' height='150px' />
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
            <NewsletterSubscribe />
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