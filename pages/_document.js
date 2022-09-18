import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' >
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-216078895-1" strategy="afterInteractive"  />
          <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'UA-216078895-1');
        `}
      </Script>    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}