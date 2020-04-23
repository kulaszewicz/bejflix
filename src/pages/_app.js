import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import './App.css';

function BejflixApp({ Component, pageProps }) {
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
                <title>Pros.Work</title>
            </Head>

            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
}

BejflixApp.getInitialProps = async payload => {
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

export default BejflixApp;
