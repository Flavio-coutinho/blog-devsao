import { AppProps } from '../../node_modules/next/app';
import React from 'react';
import '../styles/global.scss';
import { Header } from '../components/Header/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
