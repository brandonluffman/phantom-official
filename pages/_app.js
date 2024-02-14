import '../styles/globals.css'
import '../styles/styles.css';
import '../styles/Slug.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css';
import '../styles/blogpage.css';
import '../styles/contact.css';
import '../styles/footer.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/project.css';
import '../styles/pageloader.css';
import '../styles/portfolio.css';
import '../styles/services.css';
import '../styles/servicecards.css';
import '../styles/four.css';
import '../styles/about.css';
import '../styles/goldshield.css';
import '../styles/seo.css';
import '../styles/webdevelopment.css';
import '../styles/webservices.css';
import '../styles/localseo.css';
import '../styles/alertbanner.css';


config.autoAddCss = false
import { useState, useEffect } from "react"
import Router from "next/router"
import PageLoader from "../components/PageLoader"
import GoogleAnalytics from '../components/GoogleAnalytics';

  
const MyApp = ({ Component, pageProps, router }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      // Used for page transition
      const start = () => {
        setLoading(true)
      }
      const end = () => {
        setLoading(false)
      }
      Router.events.on("routeChangeStart", start)
      Router.events.on("routeChangeComplete", end)
      Router.events.on("routeChangeError", end)
      return () => {
        Router.events.off("routeChangeStart", start)
        Router.events.off("routeChangeComplete", end)
        Router.events.off("routeChangeError", end)
      }
    }, [])
    return (
      <>
        <GoogleAnalytics />
        {loading ? <PageLoader /> : <Component {...pageProps} />}
      </>
    ) 
}

export default MyApp