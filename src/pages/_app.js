import './App.css';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../utils/theme';
import { Fonts } from '../utils/theme/fonts';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Bejflix</title>
      </Head>

      <MuiThemeProvider theme={defaultTheme}>
        <Fonts />
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (payload) => {
  // throw _app GIP err here
  const initialProps = await App.getInitialProps(payload);
  const { Component, ctx } = payload;
  try {
    if (Component.getInitialProps) {
      initialProps.pageProps = {
        ...initialProps.pageProps,
        ...(await Component.getInitialProps({
          ...ctx,
        })),
      };
    }
  } catch (error) {
    console.error(error);
    const statusCode = error.statusCode || 500;
    if (ctx.res) {
      ctx.res.statusCode = statusCode;
    }
    initialProps.pageProps = {
      ...initialProps.pageProps,
      namespacesRequired: Component.namespacesRequired,
      statusCode,
      error: true,
    };
  }
  if (ctx.req) {
    initialProps.pageProps.isMobile = /mobile/i.test(
      ctx.req.headers['user-agent'] || ''
    );
  }

  initialProps.pageProps = {
    ...initialProps.pageProps,
  };

  return initialProps;
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
