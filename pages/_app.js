import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
          <title>Lorem Ipsum</title>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Lorem Ipsum" />
          <meta name="keywords" content="Lorem, Ipsum" />
          <meta name="author" content="Matheus Ferreira da Costa" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Lorem Ipsum" />
          <meta
            name="og:description"
            property="og:description"
            content="Lorem Ipsum"
          />
          <meta property="og:site_name" content="Lorem Ipsum" />
          <meta property="og:url" content="https://desafio-kbrtec.vercel.app" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta property="og:image" content="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="matheusferr/desafio-kbrtec" />
          <meta name="twitter:description" content="Lorem Ipsum" />
          <meta name="twitter:site" content="@m4theus_ferr" />
          <meta name="twitter:creator" content="@m4theus_ferr" />
        </Head>

        <Component />
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default MyApp;
