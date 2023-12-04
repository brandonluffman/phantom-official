// components/GoogleAnalytics.js

import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C9TJ3JRF8V"
        strategy="afterInteractive" // Load the script after the page becomes interactive
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C9TJ3JRF8V');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
