import Head from 'next/head';
import Script from 'next/script';

function IndexPage() {
  return (
    <div>
     <Script
    type="application/ld+json"
    id="my-script"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(
      {
        "@context" : "http://schema.org",
        "@type" : "LocalBusiness",
        "name" : "Phantom SEO & Web Design",
        "url" : "https://phantomdm.com/",
      }
      ) }}
  />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-216078895-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-216078895-1');
        `}
      </Script>


      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
           !function(f,b,e,v,n,t,s)
           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
           n.queue=[];t=b.createElement(e);t.async=!0;
           t.src=v;s=b.getElementsByTagName(e)[0];
           s.parentNode.insertBefore(t,s)}(window, document,'script',
           'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', '416358717076654');
           fbq('track', 'PageView');
        `}
      </Script>
    <noscript><img height="1" width="1" alt='facebook-pixel' style={{display: "none" }}
    src="https://www.facebook.com/tr?id=416358717076654&ev=PageView&noscript=1"
    /></noscript>



      <Head>
          <title>Phantom Technologies | Professional Website Developers</title>
          <meta charset="utf-8" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Phantom Technologies" />
          <meta name="og:description" property="og:description" content="Join Phantom and ignite your visibility with a professionally designed website." />
          <meta property="og:site_name" content="Phantom Technologies" />
          <meta property="og:url" content="https://phantomdm.com/" />  
          <meta name="twitter:card" content="summary" /> 
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content='' />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="" />
          <link rel="icon" type="image/png" href="/img.png" />
          <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
          <meta property="og:image" content="" />  
          <meta name="twitter:image" content="" />   
          <link rel="canonical" href="https://phantomdm.com/"/>
      </Head>
    </div>
  ) 
}

export default IndexPage;