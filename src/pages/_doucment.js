import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../config/theme';

const GTM_CODE = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGXBT7L');`;

const GTM_NS_CODE = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGXBT7L"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;

class MyDocument extends Document {
  render() {
    return (
      <html lang={'en'}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: GTM_CODE,
            }}
          />
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
          />
          <title>Bejflix</title>
        </Head>
        <body>
          <div
            dangerouslySetInnerHTML={{
              __html: GTM_NS_CODE,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => {
        return sheets.collect(<App {...props} />);
      },
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <Fragment>
        {sheets.getStyleElement({ id: 'jss-server-side' })}
        {flush() || null}
      </Fragment>
    ),
  };
};

export default MyDocument;
