import Head from 'next/head';
import Script from 'next/script';

function IndexPage() {
  return (
      <Head>
          <title>Phantom Technologies | Professional Website Development</title>
          <meta charset="utf-8" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Phantom Technologies" />
          <meta name="og:description" property="og:description" content="" />
          <meta property="og:site_name" content="Phantom Technologies" />
          <meta property="og:url" content="https://phantomdm.com/" />  
          <meta name="robots" content="index, follow" />
          <link rel="icon" type="image/png" href="/img.png" />
          <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
          <meta property="og:image" content="" />  
          <meta name="twitter:image" content="" />   
          <link rel="canonical" href="https://phantomdm.com/"/>
      </Head>
  ) 
}

export default IndexPage;