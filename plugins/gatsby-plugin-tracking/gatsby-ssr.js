import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV !== 'production') {
    //return;
  }

  return setPostBodyComponents([
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:760266,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `
        }}
    />,

    <script
      type="text/javascript"
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-113174828-1"
    />,
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', 'UA-113174828-1', {
              'anonymize_ip': true,
              'cookie_expires': 0
              });`
        }}
    />,
  ])
}
