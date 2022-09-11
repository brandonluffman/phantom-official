import '../styles/globals.css'
import '../styles/styles.css';
import '../styles/Slug.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css';
import '../styles/blogpage.css';
import '../styles/footer.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
